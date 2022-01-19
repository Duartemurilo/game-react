import React from 'react'
import './index.css'
import DemonImage from '../../Assets/DEMON.png'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../Constants/Sizes'
import useEnemyMoviment from '../../Hooks/enimyMoviment'
import { EDirection } from '../../Constants/Edirections'

function Demon() {
  const { position, direction } = useEnemyMoviment({ x: 15, y: 5 })

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position?.y,
        left: TILE_SIZE * position?.x,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE + 22,
        backgroundImage: `url(${DemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${DEMON_TILE_SIZE - 95}px`,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    ></div>
  )
}

export default Demon
