import {Post} from "@/interfaces/post";
import Link from "next/link";

interface Props {
    preview: Post
}

export function PostPreview({ preview }: Props) {

    return (
        <Link href={`/posts/${preview.slug}`}>
            <div key={preview.slug} className={"card w-80 shadow-xl hover:scale-105 transition-transform duration-200"}>
                <figure>
                    <img
                        src={preview.coverImage}
                        alt={preview.title}
                    />
                </figure>

                <div className="card-body">
                    <h2 className="text-black font-semibold card-title">{preview.title}</h2>
                    <p className="mb-4" >{preview.excerpt.split(" ").slice(0, 20).join(" ")}...</p>
                    <p className="text-sm">{new Date(preview.date).toLocaleDateString()}</p>
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