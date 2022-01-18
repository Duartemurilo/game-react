import React from 'react'
import './index.css'
import DemonImage from '../../Assets/DEMON.png'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../Constants/Sizes'

function Demon() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 9,
        left: TILE_SIZE * 8,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE + 22,
        backgroundImage: `url(${DemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${DEMON_TILE_SIZE - 95}px`,
      }}
    ></div>
  )
}

export default Demon
