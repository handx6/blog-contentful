import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "@/components/layout/Layout";


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
  console.log(post);
  return {
    props: {
      post: post[0],
    },
  };
}

export default function Index({ post }) {
  const { title, content, featuredImage } = post.fields;
  const urlImg = "https:" + featuredImage.fields.file.url;
  return (
    <>
      <Layout>
        <h1 className="text-xl font-bold">{title}</h1>
        <img src={urlImg} alt={title} />
        <div>{documentToReactComponents(content)}</div>
      </Layout>
    </>
  );
}
