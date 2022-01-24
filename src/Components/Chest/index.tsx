import React from 'react'
import './index.css'
import ChestImage from '../../Assets/CHEST.png'
import { TILE_SIZE } from '../../Constants/Sizes'

interface Iprops {
  initialPosition: { x: number; y: number }
}

function Chest(props: Iprops) {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
        width: TILE_SIZE + 8,
        height: TILE_SIZE + 10,
        backgroundImage: `url(${ChestImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'chest-animation  1s steps(3) infinite',
        objectFit: 'cover',
      }}
    ></div>
  )
}

export default Chest
