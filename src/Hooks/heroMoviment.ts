import { sfx } from './../Music/Music'
import { ChestContext } from '../Context/Chest/ChestContext'
import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../Constants/Edirections'
import { Echaracter } from '../Constants/character'
import { StepsContext } from '../Context/StepsContext/StepsContext'

function useHeroMoviment(initialPosition: any) {
  const [heroPosition, setHeroPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)
  const canvasContext = useContext(AuthContext) as any
  const chestContext = useContext(ChestContext) as any
  const stepsContext = useContext(StepsContext) as any

  const step = stepsContext.stepsState.totalSteps

  useEventListener('keydown', (event: any) => {
    const direction = event.key

    if (direction.indexOf('Arrow')) {
      return
    }

    const moviment = canvasContext.canvasState.uptadecanvas(direction, heroPosition, Echaracter.HERO, step)

    const elemento = document.getElementById('elemento')

    if (moviment.isValidMoviment.dead) {
      if (elemento.classList) elemento.classList.add('dead')
      sfx.moster.play()
      setTimeout(() => {
        alert('Você morreu')
        window.location.reload()
      }, 100)
    }

    if (moviment.isValidMoviment.valid) {
      setHeroPosition(moviment.nextMove)
      setDirection(direction)

      stepsContext.stepsState.updateSteps(10)
    }

    if (moviment.isValidMoviment.chest) {
      sfx.push.play()
      chestContext.chestState.uptadeChest(moviment.nextMove)
    }

    if (
      chestContext.chestState.totalChest === chestContext.chestState.openChest.total &&
      moviment.isValidMoviment.door
    ) {
      alert('voce venceu ')
      window.location.reload()
      sfx.openDoor.play()
    }
  })

  return {
    heroPosition: heroPosition,
    direction: direction,
  }
}

export default useHeroMoviment
