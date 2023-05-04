import React from 'react'
import Link from 'next/link';
import { formatDateAndTime } from "@contentful/f36-components";
import { MdCalendarMonth } from "react-icons/md";
import { HiUser } from "react-icons/hi";

export default function CardAside({ post }) {
    const { title, featuredImage, slug, author, createdAt } = post.fields
    const imgUrl = 'https:' + featuredImage.fields.file.url;
   

    return (
      <div className="pb-6">
        <Link href={slug}>
          <div className="flex space-x-4">
            <img
              src={imgUrl}
              alt={title}
              className="rounded-md w-[60px] h-[60px]"
            />
            <div className="flex flex-col justify-between">
              <p className="text-md text-[#171717]">{title}</p>
              <div className="flex items-start space-x-2">
                <div className="flex text-sm text-gray-500 items-center">
                  <MdCalendarMonth />
                  <p className="text-sm text-gray-500">
                    {formatDateAndTime(createdAt, "day")}
                  </p>
                </div>
                <div className="flex text-sm text-gray-500 items-center">
                  <HiUser />
                  <p className="text-sm text-gray-500">{author}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
}
