import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js";
// import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { sortPostsByDate, formatDate } from "@/utilities/sortPostsByDate";
import Metadata from "@/components/utilities/metadata";
import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { GoCopy, GoCheck } from "react-icons/go";
import Image from "next/image";
import { gaEvent } from "@/utilities/ga";
import { phCapture } from "@/utilities/posthog";

const markdown = `
  \`\`\`jsx
import React from 'react';

const App = (props) => {
    return (
        <section id='tagline'>
            <div className='tagline-content'>
                <h1>Tidak ada kata berhenti untuk belajar ✨</h1>
                <p>Tingkatkan terus skill mu</p>
                <button>Mulai Sekarang 🚀</button>
            </div>
        </section>
    )
}

export default App;
  \`\`\`
`;

const BlogPage = ({ posts }) => {
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [languageText, setLanguageText] = useState("");
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);

  const handleCopy = () => {
    const codeBlock = document.querySelector("pre code");
    if (!codeBlock) return;

    const language =
      codeBlock.getAttribute("hljs") ||
      codeBlock.className ||
      "";

    const lang =
      language.includes("-")
        ? language.split("-")[1]?.split(" ")[0]
        : "";

    // ==== COPY LOGIC ====
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(codeBlock.innerText.trim());
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = codeBlock.innerText;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setLanguageText(lang);
    setCopyButtonText("Copied!");
    setTimeout(() => setCopyButtonText("Copy"), 2000);

    gaEvent({
      action: "copy_code",
      category: "blog_engagement",
      label: lang || "unknown_language",
    });

    phCapture("code_copied", {
      language: lang,
      location: "blog_hero_codeblock",
      page: "blog",
    });
  };

  const copyButton = () => {
    const codeBlock = document.querySelector("pre code");
    const copyCode = document.querySelector("#copy-code");
    const language = codeBlock.getAttribute("hljs") || codeBlock.className;
    setLanguageText(
      language.split("-")[1].split(" ")[0]
        ? language.split("-")[1].split(" ")[0]
        : ""
    );
  };

  useEffect(() => {
    hljs.highlightAll();
    copyButton();
  }, []);

  return (
    <>
      <Metadata
        title="Blog"
        description="Dokumentasi kegiatan belajar sehari-hari seputar Programming, Networking, dan System Administrator"
        image="/metadata/blog.png"
        url="blog"
      />

      <section className="pb-36 pt-36 transition-all duration-300 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold md:text-xl">
                <span className="mt-1 block text-3xl font-bold text-dark dark:text-gray dark:text-white lg:text-5xl">
                  Belajar Itu Mudah Bukan?{" "}
                  <span className="ml-1 inline-block -rotate-1 rounded-xl bg-gradient-to-r via-primary/20 px-4 py-1.5 text-lg tracking-tight shadow-2xl shadow-primary/[0.50] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">
                    
                  </span>
                </span>
              </h1>

             

             
            </div>

            <div className="mt-10 w-full self-center rounded-lg px-4 lg:w-1/2">
              <div className="w-full rounded-lg shadow-2xl shadow-primary/[0.25]">
                <div className="flex h-9 w-full items-center justify-start space-x-1.5 rounded-t-lg bg-slate-400/30 px-3 transition-all duration-300 dark:bg-slate-800">
                  <div className="h-3 w-3 rounded-full bg-red-400 border-[2.5px] border-[#696a73]"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400 border-[2.5px] border-[#696a73]"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400 border-[2.5px] border-[#696a73]"></div>
                  <div className="flex-grow"></div>
                  <div className="text-center text-sm font-semibold text-white">
                    <span className="text-slate-400">{languageText}</span>
                  </div>
                  <div className="flex-grow"></div>
                  <div
                    className="group cursor-pointer text-center text-sm font-semibold text-white"
                    id="copy-code"
                    onClick={handleCopy}
                  >
                    {copyButtonText === "Copy" ? (
                      <>
                        <GoCopy className="text-dark transition-all duration-300 dark:text-white" />
                        <span className="absolute mt-4 right-[19rem] scale-0 rounded p-2 text-xs bg-dark text-white dark:bg-white dark:text-dark group-hover:scale-100 w-[4.5rem] whitespace-normal transition duration-200 ease-in-out font-bold">
                          ✨ Copy
                        </span>
                      </>
                    ) : (
                      <GoCheck className="text-lg text-green-400" />
                    )}
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(markdown),
                  }}
                  className="font-bold"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-12 pt-12 transition-all duration-300 dark:bg-dark">
        <div className="container">
          <div className="mx-auto px-4 sm:px-6 md:px-4 lg:max-w-6xl lg:px-8 xl:max-w-7xl">
            <div className="space-y-10 sm:space-y-24">
              <div style={{ opacity: 1, transform: "none" }}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  // Get files from the /posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug from file name and frontmatter from posts
  const posts = files.map((filename) => {
    // Create a slug from file name
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    // Set a default value for 'published' if it's not defined
    if (frontmatter.published === undefined) {
      frontmatter.published = true; // Default to published
    }

    return {
      slug,
      frontmatter,
    };
  });

  // Filter posts based on the 'published' property
  const publishedPosts = posts.filter((post) => post.frontmatter.published);

  return {
    props: {
      posts: publishedPosts.sort(sortPostsByDate),
    },
  };
};

export default BlogPage;
