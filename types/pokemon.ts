// Blueprint for the clean Pokemon object used in the UI cards
export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}

// Blueprint for raw list items returned directly from PokéAPI
export interface PokeApiListItem {
  name: string;
  url: string;
}
