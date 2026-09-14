import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortPostsByDate } from "@/utilities/sortPostsByDate";
import Metadata from "@/components/utilities/metadata";
import ArticleLayout from "@/components/article/article";
import { useRouter } from "next/router";

const DynamicTagPage = ({ posts }) => {
  const router = useRouter();
  const tag = router.query?.tag;
  const sortPostByDynamicTag = posts?.filter((post) => {
    if (post.frontmatter.tag.toLowerCase().includes(tag.toLowerCase())) {
      return post;
    }
  });

  return (
    <>
     

      <ArticleLayout posts={sortPostByDynamicTag} tag={tag} />
    </>
  );
};



export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
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

export default DynamicTagPage;
