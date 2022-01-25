import React from 'react'
import './index.css'
import DemonImage from '../../Assets/DEMON.png'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../Constants/Sizes'
import useEnemyMoviment from '../../Hooks/enimyMoviment'
import { EDirection } from '../../Constants/Edirections'
interface Iprops {
  initialPosition: { x: number; y: number }
}
function Demon(props: Iprops) {
  const { position, direction } = useEnemyMoviment(props.initialPosition)

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position?.y - 20,
        left: TILE_SIZE * position?.x,
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE + 30,
        backgroundImage: `url(${DemonImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 px`,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    ></div>
  )
}

export default Demon
