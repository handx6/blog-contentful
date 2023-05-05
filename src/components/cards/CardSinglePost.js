import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";

export default function CardSinglePost({urlImg, title, content, createdAt}) {
  
  return (
    <div className="lg:w-3/5">
      <img src={urlImg} alt={title} className="w-full pb-8 " />
      <p className="text-xl text-center text-gray-400 pb-4">
        {format(new Date(createdAt), "dd/MM/yyyy")}
      </p>
      <h2 className="text-2xl font-medium text-[#333333] pb-4">{title}</h2>
      <div className="text-gray-500">{documentToReactComponents(content)}</div>
    </div>
  );
}
