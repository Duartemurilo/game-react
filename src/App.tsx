import React from 'react'
import './App.css'
import Board from './Components/Board'
import Debbuger from './Components/Debbuger'
import { GAME_SIZE } from './Constants/Sizes'
import { ChestProvider } from './Context/Chest'

function App() {
  return (
    <div className="App">
      <div style={{ position: 'relative', width: GAME_SIZE, height: GAME_SIZE }}>
        <ChestProvider>
          <Board />
          <Debbuger />
        </ChestProvider>
      </div>
    </div>
  )
}

export default App
