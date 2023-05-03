import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'

export default function Layout({ children}) {
  return (
    <>
      <Navbar />
         <main>{children}</main>
      <Footer />
    </>
  );
}
