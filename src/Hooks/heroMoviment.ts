import { ChestContext } from './../Context/Chest/index'
import { AuthContext } from './../AuthContext'
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
      console.log('Voce morreu')
    }
    if (moviment.isValidMoviment.valid) {
      setHeroPosition(moviment.nextMove)
      setDirection(direction)
    }

    if (moviment.isValidMoviment.chest) {
      chestContext.chestState.uptadeChest()
    }
  })

  return {
    heroPosition: heroPosition,
    direction: direction,
  }
}

export default useHeroMoviment
