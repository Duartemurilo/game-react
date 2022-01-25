import React, { useContext } from 'react'
import './index.css'
import ChestImage from '../../Assets/CHEST.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import { ChestContext } from '../../Context/Chest/ChestContext'

interface Iprops {
  initialPosition: { x: number; y: number }
}

function Chest(props: Iprops) {
  const chestContext = useContext(ChestContext) as any

  const sholdAnimate = chestContext.chestState.openChest.position.find((position) => {
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x

    return match
  })

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
        width: TILE_SIZE + 8,
        height: TILE_SIZE + 30,
        backgroundImage: `url(${ChestImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ` 0 -5px `,
        animation: sholdAnimate && 'chest-animation  1s steps(2) forwards ',
        objectFit: 'cover',
      }}
    ></div>
  )
}

export default Chest
