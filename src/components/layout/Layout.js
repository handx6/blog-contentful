import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'
import Hero from './Hero';

export default function Layout({ children, page, postsFooter }) {
  return (
    <div className='scroll-smooth'>
      <Navbar />
         <Hero page={page}/>
         <main>{children}</main>
      <Footer posts={postsFooter}/>
    </div>
  );
}
