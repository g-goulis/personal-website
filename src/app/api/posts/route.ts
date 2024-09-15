import {NextResponse} from 'next/server';
import {getAllPosts} from "@/lib/api";

export async function GET(request: Request) {
    return NextResponse.json(
        {posts: getAllPosts()},
        {}
    );
}