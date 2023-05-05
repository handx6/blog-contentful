import React from 'react'
import Card from "@/components/cards/Card";

export default function GetList({posts}) {
  console.log(posts);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  );
}
