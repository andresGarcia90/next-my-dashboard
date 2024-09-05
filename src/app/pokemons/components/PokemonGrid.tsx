import { SimplePokemon } from '../interfaces/simple-pokemon';
import CardPokemon from './PokemonCard';

interface Props {
  pokemons: SimplePokemon[];
}
export default function GridPokemon({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
