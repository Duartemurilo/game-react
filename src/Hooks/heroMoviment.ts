import { RenderContext } from './../Context/RenderLevelContext/RenderLevelContext'
import { sfx } from './../Music/Music'
import { ChestContext } from '../Context/Chest/ChestContext'
import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../Constants/Edirections'
import { Echaracter } from '../Constants/character'
import { StepsContext } from '../Context/StepsContext/StepsContext'
import Swal from 'sweetalert2'

function useHeroMoviment(initialPosition: any) {
  const [heroPosition, setHeroPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)
  const canvasContext = useContext(AuthContext) as any
  const chestContext = useContext(ChestContext) as any
  const stepsContext = useContext(StepsContext) as any
  const renderLevelContext = useContext(RenderContext) as any

  const step = stepsContext.stepsState.totalSteps

  useEventListener('keydown', (event: any) => {
    const direction = event.key

    console.log(direction)

    // if (direction.indexOf('Arrow')) {
    //   return
    // }

    const moviment = canvasContext.canvasState.uptadecanvas(direction, heroPosition, Echaracter.HERO, step)

    const elemento = document.getElementById('elemento')

    if (moviment.isValidMoviment.dead) {
      if (elemento.classList) elemento.classList.add('dead')
      sfx.moster.play()
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

    if (moviment.isValidMoviment.valid) {
      setHeroPosition(moviment.nextMove)
      setDirection(direction)

      stepsContext.stepsState.updateSteps()
      renderLevelContext.renderLevelState.updateRenderLevel()
    }

    if (moviment.isValidMoviment.chest) {
      sfx.push.play()
      chestContext.chestState.uptadeChest(moviment.nextMove)
    }

    if (
      chestContext.chestState.totalChest === chestContext.chestState.openChest.total &&
      moviment.isValidMoviment.door
    ) {
      sfx.openDoor.play()
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'VITÓRIA',
          text: 'VOCÊ VENCEU',
        })
      }, 100)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  })

  return {
    heroPosition: heroPosition,
    direction: direction,
  }
}

export default useHeroMoviment
