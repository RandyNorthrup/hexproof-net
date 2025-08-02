import Head from 'next/head';
import Navbar from '../components/Navbar';
import CardSearch from '../components/CardSearch';

export default function Home() {
  return (
    <>
      <Head>
        <title>HexProof.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to HexProof.net</h1>
        <CardSearch />
      </main>
    </>
  );
}