import React from 'react'
import './index.css'
import TrapImage from '../../Assets/TRAP.png'
import { TILE_SIZE } from '../../Constants/Sizes'

function Trap() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 10,
        left: TILE_SIZE * 15,
        width: TILE_SIZE,
        height: TILE_SIZE + 12,
        backgroundImage: `url(${TrapImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation  1s steps(8) infinite',
      }}
    ></div>
  )
}

export default Trap
