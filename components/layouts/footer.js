import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus } from "@/types/menu";
import { tags } from "@/types/tag";
import { gaEvent } from "@/utilities/ga";
import { phCapture } from "@/utilities/posthog";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="relative w-full border-t border-dark/20 dark:border-white/20 pt-12 transition duration-300 ease-in-out dark:bg-dark dark:opacity-90 lg:pt-20">
      <div className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1500/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-600 to-cyan-800 opacity-25 dark:block"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-2">
            <h2 className="flex h-10 shrink-0 items-center text-xl md:text-3xl font-bold focus:outline-none dark:text-white mb-5">
              {"Geva Alviana Tanjung"} 
            </h2>
            <h3 className="mb-2 text-lg font-bold text-accents-300 dark:text-white/80">
              Hubungi Saya
            </h3>
            <a
              href="mailto:gevaalviana@gmail.com"
              className="hover:text-primary text-accents-300 dark:text-white/80 dark:hover:text-primary"
              onClick={() => {
                gaEvent({
                  action: 'footer_clicked',
                  category: 'navigation',
                  label: 'Email',
                });

                phCapture('footer_clicked', {
                  label: 'Email',
                  target: 'mailto:gevaalviana@gmail.com',
                  location: 'footer',
                });
              }}
            >
              <span>gevaalviana@gmail.com</span>
            </a>
            <div className="flex gap-x-1">
              {/* Github */}
              <a
                href="https://github.com/Gevaalviana05"
                target="_blank"
                className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                onClick={() => {
                  gaEvent({
                    action: 'footer_clicked',
                    category: 'navigation',
                    label: 'Github',
                  });

                  phCapture('footer_clicked', {
                    label: 'Github',
                    target: 'https://github.com/Gevaalviana05',
                    location: 'footer',
                  });
                }}
              >
                <FaGithub className="h-6 w-6" />
                <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  GitHub
                </span>
              </a>

              {/* GitLab */}
              

              {/* Youtube */}
            

              {/* Instagram */}
              <a
                href="https://instagram.com/geva_alviana"
                target="_blank"
                className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                onClick={() => {
                  gaEvent({
                    action: 'footer_clicked',
                    category: 'navigation',
                    label: 'Instagram',
                  });

                  phCapture('footer_clicked', {
                    label: 'Instagram',
                    target: 'https://instagram.com/geva_alviana',
                    location: 'footer',
                  });
                }}
              >
                <FaInstagram className="h-6 w-6" />
                <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  Instagram
                </span>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/geva-alvi"
                target="_blank"
                className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                onClick={() => {
                  gaEvent({
                    action: 'footer_clicked',
                    category: 'navigation',
                    label: 'Linkedin',
                  });

                  phCapture('footer_clicked', {
                    label: 'Linkedin',
                    target: 'https://www.linkedin.com/in/arman-dwi-pangestu',
                    location: 'footer',
                  });
                }}
              >
                <FaLinkedin className="h-6 w-6" />
                <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:mt-0">
            <div className="gap-8">
              <div>
               
                
                <ul role="list" className="mt-6 space-y-4">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <a
                        className={`text-base leading-6 ${
                          pathName === tag.target
                            ? "text-primary"
                            : "text-slate-500 dark:text-slate-400"
                        } hover:text-primary dark:hover:text-primary`}
                        href={tag.target}
                        onClick={() => {
                          gaEvent({
                            action: 'footer_clicked',
                            category: 'navigation',
                            label: tag.title,
                          });
  
                          phCapture('footer_clicked', {
                            label: tag.title,
                            target: tag.target,
                            location: 'footer',
                          });
                        }}
                      >
                        {tag.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center border-t border-dark pt-8 dark:border-white/10 sm:mt-20 lg:mt-24">
          <p className="text-accents-300 dark:text-white/80 text-xs leading-5">
            © Copyright {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
        <p className="text-center text-xs font-medium text-accents-300 dark:text-white/80 mt-2">
          Make With <span className="text-pink-500">❤️</span> By{" "}
          <a
            href=""
            target="_blank"
            className="font-bold text-primary hover:text-primary/80"
            onClick={() => {
              gaEvent({
                action: 'footer_clicked',
                category: 'navigation',
                label: 'Geva Alviana Tanjung',
              });
  
              phCapture('footer_clicked', {
                label: 'Geva Alviana Tanjung',
                target: '',
                location: 'footer',
              });
            }}
          >
            Geva Alviana Tanjung
          </a>
         
          
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;
