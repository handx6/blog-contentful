import React from 'react'
import Layout from "@/components/layout/Layout";
import { createClient } from "contentful";
import Form from '@/components/contact/Form';

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

export default function Contact({ postsFooter }) {
  return (
    <>
      <>
        <Layout page={["Home", "Contact"]} postsFooter={postsFooter}>
          <div className="p-4 pt-10 pb-20 sm:px-20 md:px-32">
            <div className="pb-10">
              <h2 className="text-xl  pb-5 text-black">Contact Information</h2>
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
                <p className="text-gray-500 text-xs pb-4">
                  Address: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
                <p className="text-gray-500 text-xs pb-4">
                  Phone: <span className="text-black">+ 1235 2355 98</span>
                </p>
                <p className="text-gray-500 text-xs pb-4">
                  Email: <span className="text-black">info@yoursite.com</span>
                </p>
                <p className="text-gray-500 text-xs pb-4">
                  Website <span className="text-black">yoursite.com</span>
                </p>
              </div>
            </div>
            <div className="bg-gray-100 sm:flex sm:flex-row-reverse">
              <Form />
              <div className="w-full sm:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16855.99269738779!2d1.4811558925206425!3d49.10444572559648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1683292475625!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[40vh] sm:h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </Layout>
      </>
    </>
  );
}
