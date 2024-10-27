import {Post} from "@/interfaces/post";
import Link from "next/link";

interface Props {
    post: Post
}

export function PostPreview({ post }: Props) {
    return (
        <Link href={`/posts/${post.id}`}>
            <div key={post.id} className={"card w-80 shadow-xl hover:scale-105 transition-transform duration-200"}>
                <figure>
                    <img
                        src={post.coverImage}
                        alt={post.title}
                    />
                </figure>

                <div className="card-body">
                    <h2 className="text-black font-semibold card-title">{post.title}</h2>
                    <p className="mb-4" >{post.excerpt.split(" ").slice(0, 20).join(" ")}...</p>
                    <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
                    {/*<div>*/}
                    {/*    <div className="badge text-gray-600 bg-red-400 border-0">default</div>*/}
                    {/*</div>*/}
                    {/*<div className="card-actions justify-end">*/}
                    {/*    <button className="btn btn-primary">Buy Now</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Link>
    );

}