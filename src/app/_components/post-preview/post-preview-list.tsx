"use client";

import {useEffect, useState} from "react";
import {Post} from "@/interfaces/post";
import {PostPreview} from "@/app/_components/post-preview/post-preview";


export function PostPreviewList() {
    const [previews, setPreviews] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const previewsPerPage = 5;

    // Fetch all previews when component mounts
    useEffect(() => {
        const getPreviews = async () => {
            const response = await fetch("/api/posts"); // Adjust to your endpoint or local data
            const data = await response.json();
            return data.posts;
        };
        getPreviews().then(response => setPreviews(response));
    }, []);


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
          <div className="flex flex-row items-start justify-center gap-4">
              {currentPosts.map((preview) => <PostPreview preview={preview} />)}
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
