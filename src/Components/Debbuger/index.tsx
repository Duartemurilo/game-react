import React from 'react'
import { canvasDebuger } from '../../Context/Canvas/helpers'
import Tile from './Tile'

function getCanvasMap() {
  const tilesArray = []

  for (let y = 0; y < canvasDebuger.length; y++) {
    const canvasY = canvasDebuger[y]

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = { x: x, y: y }

      const text = canvasDebuger[y][x] || canvasYX

      tilesArray.push(<Tile position={position} text={text} />)
    }
  }

  return tilesArray
}

function Debbuger() {
  const tiles = getCanvasMap()
  return <div>{tiles}</div>
}

export default Debbuger
