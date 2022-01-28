import React from 'react'
import Footer from './Components/Footer/Footer'
import Game from './Components/Game/Game'
import HowToPlay from './Components/HowToPlay/ HowToPlay'
import { GAME_SIZE } from './Constants/Sizes'
import { DifficultyProvider } from './Context/Difficult/DifficutyContext'

function App() {
  // music?.overworld.play()

  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: GAME_SIZE,
        }}
      >
        <DifficultyProvider>
          <Game />
          <HowToPlay />
          <Footer />
        </DifficultyProvider>
      </div>
    </div>
  )
}

export default App
