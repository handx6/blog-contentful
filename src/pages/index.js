import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout';
import { createClient } from 'contentful';
import Card from '@/components/cards/Card';
const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  return (
    <>
      <Layout>
        
        {posts.map((post) =>(
          <Card key={post.sys.id} post={post}/>
        ))}
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
    limit: 8,
  });

  // 3 - on envoie la data dans les props
  return {
    props: {
      posts: data.items
    },
  };
}
