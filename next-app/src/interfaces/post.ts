import { type Author } from "./author";

export type Post = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  preview?: boolean;
};
