import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>HexProof.net</title>
      </Head>
      <div className="bg-background text-white min-h-screen">
        <Navbar />
        <header className="text-center py-16 bg-gradient-to-b from-black to-background">
          <h1 className="text-4xl font-bold">Welcome to HexProof.net</h1>
          <p className="text-muted mt-2">Your MTG Marketplace & Trading Hub</p>
          <button className="mt-6 bg-accent text-white px-6 py-2 rounded hover:opacity-80">
            Start Trading
          </button>
        </header>
        <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Shop Cards', 'Build Decks', 'Trade Binder', 'Sell Cards'].map((section, i) => (
            <div key={i} className="bg-card p-6 rounded shadow-md">
              <h2 className="text-xl font-bold mb-2">{section}</h2>
              <p className="text-muted">Explore our {section.toLowerCase()} feature coming soon.</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
