'use client'
import PokemonIcon from '@/app/Icons/PokemonIcon';
import { PokemonGrid } from '@/app/pokemons';
import { useAppSelector } from '@/app/store'
import React, { useState } from 'react'

const NoPokemon = () => {
  return (
    <div className='flex-col'>
      <div className='flex items-center justify-center'>
        <PokemonIcon size={90} className="w-28 h-28"/>
      </div>
      <p className="text-center">No hay favoritos</p>
    </div>
  )
}

export const  FavoritesPage = () => {

  const pokemons = useAppSelector( state => state.pokemons.favorites );
  // const  = ;
  const [pokemonList, setPokemonList] = useState(Object.values(pokemons));

  return (
    <div className="flex flex-col">
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemonList.length === 0 && <NoPokemon />}
      {pokemonList.length > 0 && <PokemonGrid pokemons={pokemonList} />}
    </div>
  </div>
  )
}

export default FavoritesPage