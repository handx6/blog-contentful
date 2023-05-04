import React from 'react'
import FarPart from './FarPart'
import LatestPart from './LatestPart'
import InfoPart from './InfoPart'
import QuestionPart from './QuestionPart'

export default function Footer({posts}) {
  return (
    <footer className="bg-[#222831] text-white pt-10 px-4 sm:px-20 md:px-32">
      <div className="sm:grid sm:grid-cols-2 sm:justify-between sm:gap-2 lg:grid-cols-4 ">
        <FarPart />
        <LatestPart posts={posts} />
        <InfoPart />
        <QuestionPart />
      </div>

      <p className="pb-16 text-center text-[#BFC0C2] text-sm">
        Copyright ©2023 All rights reserved | This template is made with ♥︎ by
        Martin Nicolas
      </p>
    </footer>
  );
}



