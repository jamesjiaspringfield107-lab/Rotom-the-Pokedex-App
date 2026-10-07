import { PokemonData } from "../types/pokemon";

export const getPokepediaData = async (): Promise<PokemonData[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=386");
  const data = await response.json();

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      const details: any = await res.json();

      return {
        id: details.id,
        name: details.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
        types: details.types.map((t: any) => t.type.name),
      };
    }),
  );

  return pokemonList;
};
