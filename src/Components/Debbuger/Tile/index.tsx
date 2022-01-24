import React from 'react'
import { TILE_SIZE } from '../../../Constants/Sizes'
import { ECanva } from '../../../Context/Canvas/helpers'
import './index.css'
interface Iprops {
  position: { x: number; y: number }
  text: number
}

function Tile(props: Iprops) {
  const changeColor = () => {
    switch (props.text) {
      case ECanva.FLOOR:
        return 'darkgrey'
      case ECanva.WALL:
        return 'yellow'
      case ECanva.HERO:
        return 'magenta'
      case ECanva.DOOR:
        return 'white'
      case ECanva.DEMON:
        return 'red'
      case ECanva.MINI_DEMON:
        return 'red'
      case ECanva.CHEST:
        return 'cyan'
      case ECanva.TRAP:
        return 'charteuse'
    }
  }

  const color = changeColor()
  return (
    <div
      className="Tile"
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        position: 'absolute',
        top: TILE_SIZE * props.position.y,
        left: TILE_SIZE * props.position.x,
        color: color,
        border: `2px solid ${color}`,
        fontSize: 20,
        zIndex: 2,
      }}
    >
      {props.text}
    </div>
  )
}

export default Tile
