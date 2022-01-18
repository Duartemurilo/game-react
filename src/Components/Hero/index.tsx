import React, { useState } from 'react'
import './index.css'
import HeroImage from '../../Assets/HERO.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import useEventListener from '@use-it/event-listener'

function Hero() {
  const initialPosition = {
    x: 15,
    y: 15,
  }

  const [heroPosition, setHeroPosition] = useState(initialPosition)
  const [direction, setDirection] = useState('RIGHT')

  useEventListener('keydown', (event: any) => {
    if (event.key === 'ArrowLeft') {
      setHeroPosition({ x: heroPosition.x - 1, y: heroPosition.y })
      setDirection('LEFT')
    } else if (event.key === 'ArrowRight') {
      setHeroPosition({ x: heroPosition.x + 1, y: heroPosition.y })
      setDirection('RIGHT')
    } else if (event.key === 'ArrowDown') {
      setHeroPosition({ x: heroPosition.x, y: heroPosition.y - 1 })
    } else if (event.key === 'ArrowUp') {
      setHeroPosition({ x: heroPosition.x, y: heroPosition.y + 1 })
    }
  })
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * heroPosition.y,
        left: TILE_SIZE * heroPosition.x,
        width: TILE_SIZE + 3,
        height: TILE_SIZE + 35,
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE - 13}px `,
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`,
      }}
    ></div>
  )
}

export default Hero
