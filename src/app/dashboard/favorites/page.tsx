'use client'
import { PokemonGrid } from '@/app/pokemons';
import { useAppSelector } from '@/app/store'
import React from 'react'

export const  FavoritesPage = () => {

  const pokemons = useAppSelector( state => state.pokemons.favorites );
  const pokemonList = Object.values(pokemons);

  console.log(pokemons);
  

  return (
    <div className="flex flex-col">
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemonList.length === 0 && <p className="text-center">No hay favoritos</p>}
      {pokemonList.length > 0 && <PokemonGrid pokemons={pokemonList} />}
      
      
    </div>
  </div>
  )
}

export default FavoritesPage