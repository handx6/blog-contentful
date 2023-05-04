import Image from 'next/image'
import Layout from '@/components/layout/Layout';
import { createClient } from 'contentful';
import PostList from '@/components/PostList';
export default function Home({posts, postsFooter}) {
  return (
    <>
      <Layout page="Home" postsFooter={postsFooter}>
        <PostList posts={posts} />     
      </Layout>
    </>
  );
}


export async function getStaticProps() {
  // 1 - Connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFULL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFULL_ACCESS_TOKEN,
  });

  // 2 - Récupérer data en cas de succès pour le content type => escciBlog
  const data = await client.getEntries({
    content_type: "escciBlog",
    order: "sys.createdAt",
  });

  const postsFooter = await client.getEntries({
    content_type: "escciBlog",
    limit: 2,
  });
  // 3 - on envoie la data dans les props
  return {
    props: {
      posts: data.items,
      postsFooter: postsFooter.items,
    },
  };
}
