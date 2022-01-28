import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext, useState } from 'react'
import { EDirection } from '../Constants/Edirections'
import useInterval from '@use-it/interval'
import { Echaracter } from '../Constants/character'
import Swal from 'sweetalert2'

function useEnemyMoviment(initialPosition: any) {
  const [position, setPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)
  const canvasContext = useContext(AuthContext) as any

  useInterval(function move() {
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
        Swal.fire({
          icon: 'error',
          title: 'VOCÊ MORREU...',
          text: 'TENTE DE NOVO',
        })
      }, 100)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }, 800)

  return {
    position: position,
    direction: direction,
  }
}

export default useEnemyMoviment
