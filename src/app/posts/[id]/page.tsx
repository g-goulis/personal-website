import { Metadata } from "next";
import { notFound } from "next/navigation";
import {getPostByID} from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post/post-body";
import { PostHeader } from "@/app/_components/post/post-header";
import {PostContainer} from "@/app/_components/post/post-container";

export default async function Post({params}: { params: { id: string } }) {
  const post = getPostByID(params.id);

  // Guard condition for posts not found
  if (!post) {
    return notFound();
  }

  const content: String = await markdownToHtml(post.content || "");

  return (
      <div className={"text-center"}>
        <PostContainer>
          <article className="justify-items-center align-middle">
            <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
            />
            <PostBody content={content}/>
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
