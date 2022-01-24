import React from 'react'
import BoardImage from '../../Assets/tileset.gif'
import { GAME_SIZE } from '../../Constants/Sizes'
import { canvasDebuger, ECanva } from '../../Context/Canvas/helpers'
import Chest from '../Chest'
import Demon from '../Demon'
import Hero from '../Hero'
import MiniDemon from '../Mini-Demon'
import Trap from '../Trap'

function getCanvasMap() {
  const array = []

  for (let y = 0; y < canvasDebuger.length; y++) {
    const canvasY = canvasDebuger[y]

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x]

      const position = { x: x, y: y }

      const text = canvasDebuger[y][x] || canvasYX

      let key = `${x}-${y}`

      if (text === ECanva.HERO) {
        array.push(<Hero key={key} initialPosition={position} />)
      }
      if (text === ECanva.DEMON) {
        array.push(<Demon key={key} initialPosition={position} />)
      }
      if (text === ECanva.MINI_DEMON) {
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }
      if (text === ECanva.CHEST) {
        array.push(<Chest key={key} initialPosition={position} />)
      }
      if (text === ECanva.TRAP) {
        array.push(<Trap key={key} initialPosition={position} />)
      }
    }
  }

  return array
}

const elements = getCanvasMap()
function Board() {
  return (
    <div style={{ position: 'relative' }}>
      {elements}

      <img style={{ width: GAME_SIZE, height: GAME_SIZE }} src={BoardImage} alt="board" />
    </div>
  )
}

export default Board
