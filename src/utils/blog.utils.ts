import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src", "_posts");

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  return fs.readFileSync(fullPath, "utf8");
};

export const getAllPosts = () => {
  return getSlugs().map((slug) => ({
    slug: slug,
    file: getPostBySlug(slug),
  }));
};

export const getSlugs = () => {
  return fs.readdirSync(postsDirectory).map((slug) => slug.replace(".md", ""));
};
