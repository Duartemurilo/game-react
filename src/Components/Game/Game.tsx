import React, { useState } from 'react'
import { ChestProvider } from '../../Context/Chest/ChestContext'
import { RenderProvider } from '../../Context/RenderLevelContext/RenderLevelContext'
import { StepsProvider } from '../../Context/StepsContext/StepsContext'

import Board from '../Board/Board'
import Debbuger from '../Debbuger'
import Header from '../Header/Header'

function Game() {
  const [debbuger, setDebbuger] = useState(false)

  return (
    <div className="Game" id="elemento">
      <StepsProvider>
        <ChestProvider>
          <RenderProvider>
            <Header currentDebugger={setDebbuger} debbuger={debbuger} />
            <Board />
            {!!debbuger && <Debbuger />}
          </RenderProvider>
        </ChestProvider>
      </StepsProvider>
    </div>
  )
}

export default Game
