import React from 'react'
import Footer from './Components/Footer/Footer'
import Game from './Components/Game/Game'
import HowToPlay from './Components/HowToPlay/ HowToPlay'
import { GAME_SIZE } from './Constants/Sizes'

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
        <Game />
        <HowToPlay />
        <Footer />
      </div>
    </div>
  )
}

export default App
