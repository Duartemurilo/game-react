import React from 'react'
import './App.css'
import Board from './Components/Board'
import { GAME_SIZE } from './Constants/Sizes'

function App() {
  return (
    <div className="App">
      <div style={{ width: GAME_SIZE, height: GAME_SIZE }}>
        <Board />
      </div>
    </div>
  )
}

export default App
