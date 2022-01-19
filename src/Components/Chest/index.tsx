import React from 'react'
import './index.css'
import ChestImage from '../../Assets/CHEST.png'
import { TILE_SIZE } from '../../Constants/Sizes'

function Chest() {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * 12,
        left: TILE_SIZE * 6,
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
