"use client";

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import Banner from "@/app/_components/banner";
import {PostPreview} from "@/app/_components/post-preview";
import {getAllPosts} from "@/lib/api";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Post} from "@/interfaces/post";

export default function Index() {
    const [previews, setPreviews] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const previewsPerPage = 5;

    // Fetch all previews when component mounts
    useEffect(() => {
        const fetchData = async () => {
            const previews = await getPreviews();
            setPreviews(previews);
        };
        fetchData();
    }, []);

    async function getPreviews(): Promise<Post[]> {
        const response = await fetch("/api/posts"); // Adjust to your endpoint or local data
        const data = await response.json();
        return data.posts;
    }

    // Calculate the current posts for pagination
    const indexOfLastPost = currentPage * previewsPerPage;
    const indexOfFirstPost = indexOfLastPost - previewsPerPage;
    const currentPosts = previews.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination buttons handler
    const totalPages = Math.ceil(previews.length / previewsPerPage);
    const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));


    return (
          <div>
              <div className="relative pt-16">
                  <Banner imageURL={"assets/banner.webp"}/>
                  <div className="absolute inset-0 flex flex-col justify-center items-start text-center pl-16">
                      <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
                          My Blog
                      </h1>
                      <p className="text-black text-lg md:text-xl mb-6">
                          Follow along, learn something new.
                      </p>
                  </div>
              </div>
              <div className="relative flex flex-col items-center justify-center space-y-8 pt-10">
                  {currentPosts.map((preview) => (
                      <div
                          key={preview.slug}
                          className="flex items-center w-full max-w-4xl bg-blue-200 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                      >
                          <Link href={`/blog/${preview.slug}`} className="flex items-center w-full">
                              <img
                                  src={preview.coverImage}
                                  alt={preview.title}
                                  className="w-24 h-24 object-cover rounded-lg mr-6"
                              />
                              <div className="flex flex-col justify-start">
                                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{preview.title}</h2>
                                  <p className="text-gray-700 mb-4">{preview.excerpt}</p>
                                  <p className="text-gray-500 text-sm">{new Date(preview.date).toLocaleDateString()}</p>
                              </div>
                          </Link>
                      </div>
                  ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-8 space-x-4">
                  <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  >
                      Previous
                  </button>
                  <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  >
                      Next
                  </button>
              </div>
          </div>

    );
}
