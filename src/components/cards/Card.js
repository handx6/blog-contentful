import React from 'react'
import Link from 'next/link';
import { HiArrowNarrowRight } from "react-icons/hi";
import { format } from "date-fns";

export default function Card({ post }) {
    const { title, excerpt, featuredImage, slug, createdAt } = post.fields
    var imgUrl = 'https:' + featuredImage.fields.file.url;
    const date = new Date(createdAt);
    
    const optionsMonth = {
      month: "long",
    };
    const optionsYear = {
      year: "numeric",
    };

    return (
      <div className="max-w-sm">
        <div className="relative">
          <img src={imgUrl} alt={title} className="w-full h-[300px]" />
          <div className="w-28 bg-[#FFD368] text-black text-center text-xs py-2 absolute z-10 bottom-0  ml-4 px-3 pointer-events-none">
            <div className="flex space-x-2">
              <p className="text-4xl pl-2">
                {format(new Date(createdAt), "d")}
              </p>
              <div className="flex flex-col justify-center font-light text-xs">
                <p>{date.toLocaleString("en-US", optionsYear)}</p>
                <p>{date.toLocaleString("en-US", optionsMonth)}</p>
              </div>
            </div>
            <svg
              className="absolute text-[#FFD368] h-2 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlnsXlink="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>

        <div className="p-4">
          <h4 className="font-bold text-md text-gray-500 text-lg">{title}</h4>
          <p className="text-xs text-gray-400 leading-6 py-4">{excerpt}</p>
          <Link href={`posts/${slug}`}>
            <div className="flex items-center space-x-3 uppercase text-gray-400 hover:text-black">
              <HiArrowNarrowRight className="text-xs" />
              <p className="text-xs">read more</p>
            </div>
          </Link>
        </div>
      </div>
    );
}

{/* <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="group cursor-pointer relative inline-block border-b border-gray-400 w-28 text-center">
      Hover over me
      <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
        Tooltip center
        <svg
          className="absolute text-black h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xml:space="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  </div>
</div>; */}
