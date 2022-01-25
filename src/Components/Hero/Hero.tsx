import React from 'react'
import './index.css'
import HeroImage from '../../Assets/HERO.png'
import { TILE_SIZE } from '../../Constants/Sizes'
import useHeroMoviment from '../../Hooks/heroMoviment'
import { EDirection } from '../../Constants/Edirections'

interface Iprops {
  initialPosition: { x: number; y: number }
}

function Hero(props: Iprops) {
  const { heroPosition, direction } = useHeroMoviment(props.initialPosition)

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * heroPosition?.y - 20,
        left: TILE_SIZE * heroPosition?.x,
        width: TILE_SIZE + 3,
        height: TILE_SIZE * 1.7,
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation  1s steps(4) infinite',
        backgroundPosition: ` 0 -${TILE_SIZE - 2}px `,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
      }}
    ></div>
  )
}

export default Hero
