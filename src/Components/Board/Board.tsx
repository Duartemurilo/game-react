import React, { useContext } from 'react'
import BoardImage from '../../Assets/tileset.gif'
import { GAME_SIZE } from '../../Constants/Sizes'
import { canvasDebuger, ECanva } from '../../Context/Canvas/helpers'
import Chest from '../Chest/Chest'
import Demon from '../Demon/Demon'
import Hero from '../Hero/Hero'
import MiniDemon from '../Mini-Demon'
import Trap from '../Trap'
import DoorOpen from '../../Assets/DOOR-OPEN.png'
import { ChestContext } from '../../Context/Chest/ChestContext'
import './index.css'

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

function Board() {
  const chestContext = useContext(ChestContext) as any
  const elements = getCanvasMap()

  return (
    <div className="Board">
      <div style={{ position: 'relative', width: GAME_SIZE, height: GAME_SIZE }}>
        {chestContext.chestState.totalChest === chestContext.chestState.openChest.total && (
          <img src={DoorOpen} alt="porta aberta" style={{ position: 'absolute', left: 446, width: 153, top: 0 }} />
        )}
        {elements}
        <img style={{ width: GAME_SIZE, height: GAME_SIZE }} src={BoardImage} alt="board" />
      </div>
    </div>
  )
}

export default Board
