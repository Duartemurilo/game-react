import { useState } from 'react'
import { EDirection } from '../Constants/Edirections'
import useInterval from '@use-it/interval'
import { handleNextPosition } from '../Context/Canvas/helpers'

function useEnemyMoviment(initialPosition: any) {
  const [position, setPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(EDirection.RIGHT)

  useInterval(function move() {
    let ramdom = Math.floor(Math.random() * 4)
    let DirectArray = Object.values(EDirection)
    let ramdomDirection = DirectArray[ramdom]

    const nextMove = handleNextPosition(ramdomDirection, position)

    setPosition(nextMove)
    setDirection(ramdomDirection)
  }, 1000)

  return {
    position: position,
    direction: direction,
  }
}

export default useEnemyMoviment
