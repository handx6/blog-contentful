import React, { useState, useEffect} from 'react'
import Layout from '@/components/layout/Layout';
import { createClient } from 'contentful';
import Welcome from '@/components/about/Welcome';
import Testimonial from '@/components/about/Testimonial';


export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN,
  });
  
  const postsFooter = await client.getEntries({
    content_type: "escciBlog",
    limit: 2,
  });
  // 3 - on envoie la data dans les props
  return {
    props: {
      postsFooter: postsFooter.items,
    },
  };
}
export default function About({postsFooter}) {
  return (
    <>
        <Layout page={["Home", "About"]} postsFooter={postsFooter}>
          <Welcome/>
          <Testimonial />
        </Layout>
    </>
  );
}



