import { PokeApiListItem, PokemonData } from "../types/pokemon";

export const getPokepediaData = async (): Promise<PokemonData[]> => {
  // 1. Fetch 151 Gen 1 Pokémon from PokéAPI
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  // 2. Parse JSON response
  const data = await response.json();

  // 3. Map into clean PokemonData objects
  return data.results.map((item: PokeApiListItem, index: number) => {
    const id = index + 1;
    return {
      id: id,
      name: item.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });
};
