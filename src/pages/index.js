import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </>
  );
}
