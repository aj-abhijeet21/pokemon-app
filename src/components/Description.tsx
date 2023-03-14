import React from 'react'
import { PokemonType } from '../types'
type Props = {
  pokemon: PokemonType
  handleClose: () => void
}
function Description({ pokemon, handleClose }: Props) {
  const { stats, weight, height, name, sprites } = pokemon

  return (
    <div className='desc'>
      <div className='pokemon-container'>
        <h3>{name.toUpperCase()}</h3>
        <img src={sprites.other.dream_world.front_default} alt={pokemon.name} />
      </div>
      <p>
        <b>Height</b> is <b>{(height * 10).toFixed(2)} cm</b>
      </p>

      <p>
        <b>Weight</b> is <b>{(weight * 0.1).toFixed(2)} kg</b>
      </p>

      <h3>Stats</h3>

      {stats.map((stat) => (
        <p>
          <b>
            {stat.stat.name.toUpperCase()} : {stat.base_stat.toFixed(2)}
          </b>
        </p>
      ))}
      <div className='pokemon-container'>
        <button className='btn-black' onClick={() => handleClose()}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Description
