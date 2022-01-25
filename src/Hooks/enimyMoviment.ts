import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext, useState } from 'react'
import { EDirection } from '../Constants/Edirections'
import useInterval from '@use-it/interval'
import { Echaracter } from '../Constants/character'
import { DifficultyContext } from '../Context/Difficult/DifficutyContext'

function useEnemyMoviment(initialPosition: any) {
  const [position, setPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)
  const canvasContext = useContext(AuthContext) as any
  const difficultyContext = useContext(DifficultyContext) as any

  useInterval(
    function move() {
      let ramdom = Math.floor(Math.random() * 4)
      let DirectArray = Object.values(EDirection)
      let ramdomDirection = DirectArray[ramdom]

      const moviment = canvasContext.canvasState.uptadecanvas(ramdomDirection, position, Echaracter.ENEMY)

      if (moviment.isValidMoviment?.valid) {
        setPosition(moviment.nextMove)
        setDirection(ramdomDirection)
      }
      if (moviment.isValidMoviment?.dead) {
        const elemento = document.getElementById('elemento')
        if (elemento.classList) elemento.classList.add('dead')
        setTimeout(() => {
          alert('Você morreu')
          window.location.reload()
        }, 100)
      }
    },
    difficultyContext.difficultyState === 1 ? 2000 : difficultyContext.difficultyState === 2 ? 10000 : 400
  )

  return {
    position: position,
    direction: direction,
  }
}

export default useEnemyMoviment
