import { notFound } from "next/navigation";
import { PostBody } from "@/app/_components/post/post-body";
import { PostHeader } from "@/app/_components/post/post-header";
import {PostContainer} from "@/app/_components/post/post-container";
import path from "node:path";
import fs from "fs";
import matter from "gray-matter";
import {marked} from "marked";
import {getPostDirectories} from "@/lib/api";

interface Frontmatter {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
}

interface PostData {
  frontmatter: Frontmatter;
  htmlContent: string;
}

export function generateStaticParams(): string[] {
  return getPostDirectories();
}

async function getPostData(id: string) : Promise<PostData | null>  {
  const filePath = path.join('_posts', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const htmlContent = await marked(content);
  return { frontmatter: frontmatter as Frontmatter, htmlContent };
}


export default async function Post({ params }: { params: { id: string } }) {
  // console.log(params.id);
  const data  = await getPostData(params.id);
  // console.log(data);
  // Guard condition for posts not found
  if (!data) {
    return notFound();
  }

  const { frontmatter, htmlContent } = data;

  // const content: String = await markdownToHtml(data.content || "");

  return (
      <div className={"text-center"}>
        <PostContainer>
          <article className="justify-items-center align-middle">
            <PostHeader
                title={frontmatter.title}
                coverImage={frontmatter.coverImage}
                date={frontmatter.date}
            />
            <PostBody content={htmlContent}/>
          </article>
        </PostContainer>
      </div>
  );
}

type Params = {
  params: {
    id: string;
  };
};
//
// export function generateMetadata({ params }: Params): Metadata {
//   const post = getPostByID(params.id);
//
//   if (!post) {
//     return notFound();
//   }
//
//   const title = `${post.title} | Next.js Blog Example with`;
//
//   return {
//     title,
//     openGraph: {
//       title,
//     },
//   };
// }
