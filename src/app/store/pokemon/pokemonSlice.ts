import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/app/pokemons";
import { localStorageMiddleware } from "../middleware/localstorage-middleware";

interface PokemonsState { 
  favorites: { [key: string]: SimplePokemon },
}

const initialState: PokemonsState = {
  favorites: {},
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  
  reducers: {
    toggleFavorite( state, action: PayloadAction<SimplePokemon> )  {

      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: No se debe de hacer en Redux
      // localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ) );

    }
  },
  
})

export const {toggleFavorite} = pokemonSlice.actions;
export default pokemonSlice.reducer;