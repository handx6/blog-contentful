import React from 'react'
import Link from 'next/link';
export default function Card({ post }) {
    const { title, excerpt, featuredImage, slug } = post.fields
    var imgUrl = 'https:' + featuredImage.fields.file.url;
    return (
      <div>
        <Link href={`posts/${slug}`}>
          <img src={imgUrl} alt={title} className="max-w-xs" />
          <p className="font-bold">{title}</p>
          <p>{excerpt}</p>
        </Link>
      </div>
    );
}
