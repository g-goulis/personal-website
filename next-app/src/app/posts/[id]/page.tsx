import { notFound } from "next/navigation";
import { PostBody } from "@/app/_components/post/post-body";
import { PostHeader } from "@/app/_components/post/post-header";
import {getPostByID} from "@/lib/post-api";

type Params = {
  params: {
    id: string;
  };
};


export default async function Post({ params }: Params) {
  // console.log(params.id);
  const data  = await getPostByID(params.id);
  // console.log(data);
  // Guard condition for posts not found
  if (!data) {
    return notFound();
  }

  // const content: String = await markdownToHtml(data.content || "");

  return (
      <div className={"mx-10"}>
          <article className="justify-items-center align-middle">
            <PostHeader
                title={data.title}
                coverImage={data.coverImage}
                date={data.date}
            />
            <PostBody content={data.content}/>
          </article>
      </div>
  );
}

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
