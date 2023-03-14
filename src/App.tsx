import React, { useEffect, useState } from 'react'
import './App.css'
import PokemonThumbnail from './components/PokemonThumbnail'
import { PokemonType } from './types'

function App() {
  const [allPokemons, setAllPokemons] = useState<PokemonType[]>([])
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke)
    const data = await res.json()
    setLoadPoke(data.next)
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }

  function createPokemonObject(result: PokemonType[]) {
    result.forEach(async (pokemon: PokemonType) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()
      setAllPokemons((currentList) => [...currentList, data])
    })
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className='app-container'>
      <h1>Pokemon Kingdom</h1>

      <div className='pokemon-container'>
        <div className='all-container'>
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail pokemon={pokemon} />
          ))}
        </div>
        <button className='btn-black' onClick={() => getAllPokemons()}>
          Load More ...
        </button>
      </div>
    </div>
  )
}

export default App
