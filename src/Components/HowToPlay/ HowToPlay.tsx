import React from 'react'
import './index.css'

function HowToPlay() {
  return (
    <div className="ContainerHowToPlay">
      <h1>Como jogar game-md?</h1>
      <p>
        O herói tem que fugir dos inimigos e das armadilhas enquanto abre os baús no mapa, depois de abrir todos os baús
        a porta se abrirá.
      </p>
      <p style={{ marginTop: 80, textAlign: 'center', borderBottom: '1px solid black' }}>
        Explore as dificuldades e se desafie a sobreviver com menos passos
      </p>
    </div>
  )
}

export default HowToPlay
