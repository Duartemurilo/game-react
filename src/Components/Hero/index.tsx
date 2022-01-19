import React from 'react'
import './index.css'
import HeroImage from '../../Assets/HERO.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import useHeroMoviment from '../../Hooks/heroMoviment'
import { EDirection } from '../../Constants/Edirections'

function Hero() {
  const initialPosition = {
    x: 15,
    y: 15,
  }

  const { heroPosition, direction } = useHeroMoviment(initialPosition)

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * heroPosition?.y,
        left: TILE_SIZE * heroPosition?.x,
        width: TILE_SIZE + 3,
        height: TILE_SIZE + 35,
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE - 13}px `,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
      }}
    ></div>
  )
}

export default Hero
