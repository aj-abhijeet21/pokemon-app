import React, { useState } from 'react'
import { PokemonType } from '../types'
import Description from './Description'
import Modal from 'react-modal'
import { toCamelCase } from '../utils'

type Props = {
  pokemon: PokemonType
}

function PokemonThumbnail({ pokemon }: Props) {
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      margin: 'auto',
      borderRadius: '0.5rem',
    },
  }

  const style = `thumb-container ${pokemon.types[0].type.name}`

  const [open, setOpen] = useState(false)
  return (
    <div className={style}>
      <div className='number'>
        <small>#0{pokemon.id}</small>
      </div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <div className='detail-wrapper'>
        <h3>{toCamelCase(pokemon.name)}</h3>
        <small>Type : {pokemon.types[0].type.name}</small>
        <button className='pokeinfo' onClick={() => setOpen(!open)}>
          Know more...
        </button>

        <Modal style={modalStyles} className={style} isOpen={open}>
          <Description pokemon={pokemon} handleClose={() => setOpen(false)} />
        </Modal>
      </div>
    </div>
  )
}

export default PokemonThumbnail
