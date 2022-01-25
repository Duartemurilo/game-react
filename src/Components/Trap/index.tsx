import React from 'react'
import './index.css'
import TrapImage from '../../Assets/TRAP.png'
import { TILE_SIZE } from '../../Constants/Sizes'

interface Iprops {
  initialPosition: { x: number; y: number }
}

function Trap(props: Iprops) {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
        width: TILE_SIZE,
        height: TILE_SIZE + 8,
        backgroundImage: `url(${TrapImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation  1s steps(8) infinite',
      }}
    ></div>
  )
}

export default Trap
