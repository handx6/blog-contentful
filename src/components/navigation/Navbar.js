import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/post/">
          <li>Voir Post</li>
        </Link>
      </ul>
    </div>
  );
}
