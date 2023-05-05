import React from "react";
import { createClient } from "contentful";
import Layout from "@/components/layout/Layout";
import CardSinglePost from "@/components/cards/CardSinglePost";
import AsidePost from "@/components/AsidePost";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN,
});

// 2- générer ou récupérer tous les slugs de nos articles

export async function getStaticPaths() {
  // A - Récupère mes posts dans contentful
  const res = await client.getEntries({
    content_type: "escciBlog",
  });

  // B - Récupère les slugs de nos articles
  const slugs = res.items.map((slug) => {
    return {
      params: {
        slug: slug.fields.slug,
      },
    };
  });

  // C - Renvoie tous les slugs dans paths
  return {
    paths: slugs,
    fallback: false, // tous les slugs qui n'existe pas renvoie à la page 404
  };
}

// 3 - Récupérer data du post en fonction du slug
export async function getStaticProps({ params }) {
  // A - Récupère la data liée au slug
  const res = await client.getEntries({
    content_type: "escciBlog",
    "fields.slug": params.slug,
  });

  // B - Stocke la data du post dans une variable
  const post = res.items;

  const postsFooter = await client.getEntries({
    content_type: "escciBlog",
    limit: 2,
  });
  const postsAside = await client.getEntries({
    content_type: "escciBlog",
    limit: 3,
  });

  return {
    props: {
      post: post[0],
      postsFooter: postsFooter.items,
      postsAside: postsAside.items,
    },
  };
}

export default function Index({ post, postsFooter, postsAside }) {
  const { title, content, featuredImage, createdAt } = post.fields;
  const urlImg = "https:" + featuredImage.fields.file.url;
  return (
    <>
      <Layout page={["Home", "Blog", "Blog Single"]} postsFooter={postsFooter}>
        <div className="sm:px-20 md:px-32 sm:py-6 p-4 block lg:flex lg:space-x-6">
          <CardSinglePost title={title} content={content} urlImg={urlImg} createdAt={createdAt} />
          <AsidePost posts={postsAside} />
        </div>
      </Layout>
    </>
  );
}
