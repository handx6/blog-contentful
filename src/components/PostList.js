import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
// 


import GetList from "./GetList";

export default function PostList({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  let pagesData = [];

  for (let i = 0; i < posts.length; i++) {
    const remainder = i % 9;
    if (remainder === 0) {
      pagesData.push(posts.slice(i, i + 9));
    }
  }
  let pageCount = pagesData.length;
  posts = pagesData[currentPage];
  return (
    <section id="posts" className="p-4 sm:px-20 md:px-32 sm:py-6 ">
      <GetList posts={posts} />
      <div className="flex justify-center">
        <Pagination rounded color="warning" total={pageCount} initialPage={1} onChange={(page) => (
          setCurrentPage(page - 1)
        )} />
      </div>
      {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} posts={posts} pagesData={pagesData}/> */}
      {/* <div className="py-20 flex space-x-1 items-center justify-center">
        <div
          className="rounded-full border border-gray-300 hover:text-white hover:bg-gray-600"
          onClick={() =>
            currentPage - 1 >= 0 ? setCurrentPage(currentPage - 1) : null
          }
        >
          <p className="text-sm px-4 py-3 text-gray-300">{"<"}</p>
        </div>
        {pagesData.map((page, index) => (
          <div
            className={`rounded-full border border-gray-300 hover:text-white hover:bg-gray-600 ${
              currentPage === index
                ? "bg-[#FFD368] text-white"
                : "bg-white text-gray-700"
            }`}
            key={index}
            onClick={() => setCurrentPage(index)}
          >
            <p className="text-sm px-4 py-3">{index + 1}</p>
          </div>
        ))}
        <div
          className="rounded-full border border-gray-300 hover:text-white hover:bg-gray-600"
          onClick={() =>
            currentPage + 1 <  posts.length ? setCurrentPage(currentPage + 1) : null
          }
        >
          <p className="text-sm px-4 py-3 text-gray-300">{">"}</p>
        </div>
      </div> */}
    </section>
  );
}
