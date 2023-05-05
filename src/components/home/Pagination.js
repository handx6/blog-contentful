import React from "react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  posts,
  pagesData,
}) {
  return (
    <div className="py-20 flex space-x-1 items-center justify-center">
      <a href="/#posts">
        <div
          className="rounded-full border border-gray-300 hover:text-white hover:bg-gray-600"
          onClick={() =>
            currentPage - 1 >= 0 ? setCurrentPage(currentPage - 1) : null
          }
        >
          <p className="text-sm px-4 py-3 text-gray-300">{"<"}</p>
        </div>
      </a>
      {pagesData.map((page, index) => (
        <a href="/#posts" key={index}>
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
        </a>
      ))}
      <a href="/#posts" >
        <div
          className="rounded-full border border-gray-300 hover:text-white hover:bg-gray-600"
          onClick={() =>
            currentPage + 1 < pagesData.length
              ? setCurrentPage(currentPage + 1)
              : null
          }
        >
          <p className="text-sm px-4 py-3 text-gray-300">{">"}</p>
        </div>
      </a>
    </div>
  );
}
