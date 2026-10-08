// Blueprint for the clean Pokemon object used in the UI cards
//Acts as a condition to make sure that the data is in the correct format before rendering it in the UI
export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}
