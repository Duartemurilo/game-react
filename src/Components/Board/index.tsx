import React from 'react'
import BoardImage from '../../Assets/tileset.gif'
import { GAME_SIZE } from '../../Constants/Sizes'
import Chest from '../Chest'
import Debbuger from '../Debbuger'
import Demon from '../Demon'
import Hero from '../Hero'
import MiniDemon from '../Mini-Demon'
import Trap from '../Trap'

function Board() {
  return (
    <div style={{ position: 'relative' }}>
      <MiniDemon initialPosition={{ x: 13, y: 15 }} />
      <MiniDemon initialPosition={{ x: 17, y: 10 }} />
      <Hero />
      <Demon />
      <Chest />
      <Trap />
      <Debbuger />
      <img style={{ width: GAME_SIZE, height: GAME_SIZE }} src={BoardImage} alt="board" />
    </div>
  )
}

export default Board
