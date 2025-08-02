import { useState } from 'react';

export default function CardSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.data || []);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search cards..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map((card) => (
          <div key={card.id} className="border p-2 rounded shadow">
            <img src={card.image_uris?.small} alt={card.name} className="mb-2" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}