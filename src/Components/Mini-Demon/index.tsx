import React from 'react'
import './index.css'
import MiniDemonImage from '../../Assets/MINI-DEMON.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import useEnemyMoviment from '../../Hooks/enimyMoviment'
import { EDirection } from '../../Constants/Edirections'
import { Iprops } from '../../Constants/interface'

function MiniDemon(props: Iprops) {
  const { position, direction } = useEnemyMoviment(props.initialPosition)
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position?.y - 20,
        left: TILE_SIZE * position?.x,
        width: TILE_SIZE,
        height: TILE_SIZE * 1.5,
        backgroundImage: `url(${MiniDemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE}px`,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    ></div>
  )
}

export default MiniDemon
