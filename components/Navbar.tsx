export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <span className="font-bold text-xl">HexProof.net</span>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Trade</a>
          <a href="#" className="hover:underline">Deckbuilder</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Sell</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </div>
    </nav>
  );
}