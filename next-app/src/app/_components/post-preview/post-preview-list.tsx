"use client";

import {useState} from "react";
import {Post} from "@/interfaces/post";
import {PostPreview} from "@/app/_components/post-preview/post-preview";


export default function PostPreviewList({posts} : {posts : Post[]}) {
    const [currentPage, setCurrentPage] = useState(1);
    const previewsPerPage = 5;


    // Calculate the current posts for pagination
    const indexOfLastPost = currentPage * previewsPerPage;
    const indexOfFirstPost = indexOfLastPost - previewsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination buttons handler
    const totalPages = Math.ceil(posts.length / previewsPerPage);
    const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
      <div>
          <div className="flex flex-row items-start justify-center gap-4">
              {currentPosts.map((post) => <PostPreview post={post} />)}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
              <div className="join grid grid-cols-2">
                  <button className="join-item btn btn-outline" onClick={handlePrevPage}
                          disabled={currentPage === 1}>Previous page
                  </button>
                  <button className="join-item btn btn-outline" onClick={handleNextPage}
                          disabled={currentPage === totalPages}>Next
                  </button>
              </div>
          </div>
      </div>
  );
}
