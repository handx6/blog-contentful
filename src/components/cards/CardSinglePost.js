import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default function CardSinglePost({urlImg, title, content}) {
  return (
    <div className="lg:w-3/5">
      <img src={urlImg} alt={title} className="w-full pb-8 " />
      <h2 className="text-2xl font-medium text-[#333333] pb-4">{title}</h2>
      <div className="text-gray-500">{documentToReactComponents(content)}</div>
    </div>
  );
}
