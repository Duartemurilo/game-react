import React from 'react'
import { TILE_SIZE } from '../../../Constants/Sizes'
import './index.css'
interface Iprops {
  position: { x: number; y: number }
  text: number
}

function Tile(props: Iprops) {
  const changeColor = () => {
    switch (props.text) {
      case 0:
        return 'blue'
      case 1:
        return 'red'
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
      }}
    >
      {props.text}
    </div>
  )
}

export default Tile
