import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
import GetList from "./GetList";

export default function PostList({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  let pagesData = [];
  let postsToSend = [];
  // divide the post array into chunks for each page
  for (let i = 0; i < posts.length; i++) {
    const remainder = i % 9;
    if (posts.length - i === 0) {
      pagesData.push(posts.slice(i, i + remainder));
      break;
    } else if (remainder === 0) {
      pagesData.push(posts.slice(i, i + 9));
    }
  }
  let pageCount = pagesData.length;
  postsToSend = pagesData[currentPage];
  return (
    <section id="posts" className="p-4 sm:px-20 md:px-32 sm:py-6 ">
      <GetList posts={postsToSend} />
      <div className="flex justify-center py-20">
        <Pagination rounded color="warning" total={pageCount} initialPage={1} onChange={(page) => (
          setCurrentPage(page - 1)
        )} />
      </div>
    </section>
  );
}
