import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'
import Hero from './Hero';

export default function Layout({ children, heroInfo }) {
  return (
    <>
      <Navbar />
         <Hero />
         <main>{children}</main>
      <Footer />
    </>
  );
}
