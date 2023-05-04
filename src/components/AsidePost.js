import React from 'react'
import { BiSearch } from "react-icons/bi";
import CardAside from './cards/CardAside';

export default function AsidePost({posts}) {
  return (
    <aside className="w-full lg:w-2/5 pt-8 lg:pt-1 ">
      <form action="">
        <div className="flex items-center relative pb-10">
          <input
            type="text"
            placeholder="Type a keyword and hit enter"
            className="w-full text-sm px-3 py-2 placeholder-gray-400 text-gray-500 rounded-lg border-none ring-2 ring-gray-300"
          />
          <div className="absolute right-1 md:hidden lg:block ">
            <BiSearch className="text-gray-500 w-5 h-5  pointer-events-none" />
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center lg:block">
        {posts.map((post) => (
          <CardAside key={post.sys.id} post={post} />
        ))}
      </div>
    </aside>
  );
}
