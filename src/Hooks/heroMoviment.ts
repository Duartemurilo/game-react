import { useState } from 'react'
import useEventListener from '@use-it/event-listener'
import { EDirection } from '../Constants/Edirections'
import { handleNextPosition } from '../Context/Canvas/helpers'

function useHeroMoviment(initialPosition: any) {
  const [heroPosition, setHeroPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)

  useEventListener('keydown', (event: any) => {
    const direction = event.key

    if (direction.indexOf('Arrow')) {
      return
    }

    const nextmoviment = handleNextPosition(direction, heroPosition)

    setHeroPosition(nextmoviment)
    setDirection(direction)
  })
  return {
    heroPosition: heroPosition,
    direction: direction,
  }
}

export default useHeroMoviment
