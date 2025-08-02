export async function searchCards(query: string) {
  const res = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`);
  return res.json();
}