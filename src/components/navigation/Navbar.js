import React from 'react'
import Link from 'next/link'
import MenuBurger from './MenuBurger';
export default function Navbar() {
  return (
    <div className="md:absolute md:px-20 md:py-6 w-full flex justify-between items-center p-4  text-white bg-black md:bg-transparent">
      <p className="text-3xl font-black">
        Read<span className="text-[#FED267]">it</span>.
      </p>
      <ul className="space-x-6 hidden md:flex  ">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>Team</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="md:hidden">
        <MenuBurger/>
      </div>
    </div>
  );
}
