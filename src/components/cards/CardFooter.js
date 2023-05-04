import React from 'react'
import Link from 'next/link';
import { Stack, Text, formatDateAndTime } from "@contentful/f36-components";

export default function CardFooter({ post }) {
    const { title, featuredImage, slug, author, createdAt } = post.fields
    const imgUrl = 'https:' + featuredImage.fields.file.url;
   
   console.log(createdAt)
    return (
      <div className="pb-6">
        <Link href={`posts/${slug}`}>
          <div className="flex space-x-4">
            <img src={imgUrl} alt={title} className="rounded-md w-[60px] h-[60px]" />
            <div className="flex flex-col justify-between">
              <p className="text-sm text-[#BFC0C2]">{title}</p>
              <p className="text-xs text-gray-500">
                {formatDateAndTime(createdAt, "day")}   {author}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
}
