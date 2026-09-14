import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortPostsByDate } from "@/utilities/sortPostsByDate";
import ArticleLayout from "@/components/article/article";

const DynamicTagPage = ({ posts, tag }) => {
  const sortPostByDynamicTag = posts?.filter((post) => {
    return post.frontmatter.tag
      ?.toLowerCase()
      .includes(tag.toLowerCase());
  });

  return (
    <>
      <ArticleLayout posts={sortPostByDynamicTag} tag={tag} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const tags = new Set();

  files.forEach((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.tag) {
      tags.add(frontmatter.tag);
    }
  });

  const paths = Array.from(tags).map((tag) => ({
    params: {
      tag: tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.published === undefined) {
      frontmatter.published = true;
    }

    return {
      slug,
      frontmatter,
    };
  });

  const publishedPosts = posts.filter(
    (post) => post.frontmatter.published
  );

  return {
    props: {
      posts: publishedPosts.sort(sortPostsByDate),
      tag: params.tag,
    },
  };
};

export default DynamicTagPage;