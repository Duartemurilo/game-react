import { ChestContext } from '../Context/Chest/ChestContext'
import { AuthContext } from '../Context/AuthContext/AuthContext'
import { useContext, useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../Constants/Edirections'
import { Echaracter } from '../Constants/character'

function useHeroMoviment(initialPosition: any) {
  const [heroPosition, setHeroPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)
  const canvasContext = useContext(AuthContext) as any
  const chestContext = useContext(ChestContext) as any

  useEventListener('keydown', (event: any) => {
    const direction = event.key

    if (direction.indexOf('Arrow')) {
      return
    }

    const moviment = canvasContext.canvasState.uptadecanvas(direction, heroPosition, Echaracter.HERO)

    if (moviment.isValidMoviment.dead) {
      const elemento = document.getElementById('elemento')
      if (elemento.classList) elemento.classList.add('dead')
      setTimeout(() => {
        alert('Você morreu')
        window.location.reload()
      }, 100)
    }
    if (moviment.isValidMoviment.valid) {
      setHeroPosition(moviment.nextMove)
      setDirection(direction)
    }

    if (moviment.isValidMoviment.chest) {
      chestContext.chestState.uptadeChest(moviment.nextMove)
    }

    if (
      chestContext.chestState.totalChest === chestContext.chestState.openChest.total &&
      moviment.isValidMoviment.door
    ) {
      alert('voce venceu ')
      window.location.reload()
    }
  })

  return {
    heroPosition: heroPosition,
    direction: direction,
  }
}

export default useHeroMoviment
