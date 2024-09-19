import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostDirectories() {
  return fs.readdirSync(postsDirectory);
}

export function getPostPreviewByID(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data} = matter(fileContents);

  return { ...data, slug: realSlug } as Post;
}

export function getPostByID(id: string): Post {
  console.log(`Found post by ID ${id}`);
  const realSlug = id.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content} = matter(fileContents);

  return { ...data, slug: realSlug, content: content} as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostDirectories();
  const posts = slugs
    .map((slug) => getPostPreviewByID(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
