export default function Navbar() {
  return (
    <nav className="bg-card text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-glow">HexProof.net</span>
        <div className="space-x-4">
          {['Shop', 'Trade', 'Deckbuilder', 'Community', 'Sell'].map((item, idx) => (
            <a key={idx} href="#" className="hover:text-accent">{item}</a>
          ))}
          <a href="/login" className="text-muted hover:text-white">Login</a>
        </div>
      </div>
    </nav>
  );
}
