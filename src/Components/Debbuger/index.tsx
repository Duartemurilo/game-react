import React, { useContext } from 'react'
import { AuthContext } from '../../AuthContext'

import Tile from './Tile'

function getCanvasMap(canvas) {
  const tilesArray = []

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y]

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = { x: x, y: y }

      const text = canvas[y][x] || canvasYX

      let key = `${x}-${y}`

      tilesArray.push(<Tile key={key} position={position} text={text} />)
    }
  }

  return tilesArray
}

function Debbuger() {
  const canvasContext = useContext(AuthContext) as any

  const tiles = getCanvasMap(canvasContext.canvasState.canvas)

  return <div>{tiles}</div>
}

export default Debbuger
