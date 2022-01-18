import React from 'react'
import './index.css'
import MiniDemonImage from '../../Assets/MINI-DEMON.png'
import { TILE_SIZE } from '../../Constants/Sizes'

function MiniDemon() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 8,
        left: TILE_SIZE * 5,
        width: TILE_SIZE,
        height: TILE_SIZE + 24,
        backgroundImage: `url(${MiniDemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE - 2}px`,
      }}
    ></div>
  )
}

export default MiniDemon
