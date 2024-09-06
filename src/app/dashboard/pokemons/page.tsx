import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import GridPokemon from "@/app/pokemons/components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());

  const pokemons: SimplePokemon[] = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  // throw new Error('Error');

  return pokemons;
}
export default async function PokemonPage()  {

  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <GridPokemon pokemons={pokemons} />
      </div>
    </div>
  )
}
