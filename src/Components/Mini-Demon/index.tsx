import React from 'react'
import './index.css'
import MiniDemonImage from '../../Assets/MINI-DEMON.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import useEnemyMoviment from '../../Hooks/enimyMoviment'
import { EDirection } from '../../Constants/Edirections'

function MiniDemon() {
  const initialPosition = {
    x: 10,
    y: 5,
  }
  const { position, direction } = useEnemyMoviment(initialPosition)
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * position?.y,
        left: TILE_SIZE * position?.x,
        width: TILE_SIZE,
        height: TILE_SIZE + 24,
        backgroundImage: `url(${MiniDemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE - 2}px`,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    ></div>
  )
}

export default MiniDemon
