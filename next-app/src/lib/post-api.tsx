import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import {marked} from "marked";
import path from "node:path";

const postsDirectory = join(process.cwd(), "public", "_posts");

// TODO optimize?? we shouldn't wait probably
export function getPostDirectories() : string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostByID(id: string): Post | null {
  const filePath = path.join('public', '_posts', id, `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: data, content } = matter(markdownWithMeta);
  const htmlContent =  marked(content);

  return { ...data, id: id, content: htmlContent} as Post;

}

export function getAllPosts(): Post[] {
  const paths = getPostDirectories();
  const posts = paths
    .map(path => getPostByID(path))
    .filter(path => path != null)
    // sort posts by date in descending order
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown: string): Promise<String> {
  const htmlContent = marked(markdown);
  return htmlContent;
}
