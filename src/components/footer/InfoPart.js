import Link from 'next/link';
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function InfoPart() {
  return (
    <div className=''>
      <h6 className="pb-6 text-white text-lg">Information</h6>
      <ul className="text-sm text-white pb-6">
        <li className="pb-2">
          <Link href="/" className="flex pb-2 items-center">
            <MdOutlineKeyboardArrowRight />
            <p className="pl-2">Home</p>
          </Link>
        </li>
        <li className="pb-2">
          <Link href="/about" className="flex pb-2 items-center">
            <MdOutlineKeyboardArrowRight />
            <p className="pl-2">About</p>
          </Link>
        </li>
        <li className="flex space-x-2 pb-2">
          <Link href="/contact" className="flex pb-2 items-center">
            <MdOutlineKeyboardArrowRight />
            <p className="pl-2">Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
