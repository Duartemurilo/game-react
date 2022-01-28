import { EDirection2 } from './../../Constants/Edirections'
import { Echaracter } from '../../Constants/character'
import { EDirection } from '../../Constants/Edirections'

export function handleNextPosition(direction: any, position: any) {
  switch (direction) {
    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y }

    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y }

    case EDirection.UP:
      return { x: position.x, y: position.y - 1 }

    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 }

    case EDirection2.LEFT:
      return { x: position.x - 1, y: position.y }

    case EDirection2.RIGHT:
      return { x: position.x + 1, y: position.y }

    case EDirection2.UP:
      return { x: position.x, y: position.y - 1 }

    case EDirection2.DOWN:
      return { x: position.x, y: position.y + 1 }
  }
}

export enum ECanva {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7,
  NOTHIN = 8,
  W2 = 9,
}

const FL = ECanva.FLOOR
const WL = ECanva.WALL
const DR = ECanva.DOOR
const TR = ECanva.TRAP
const MD = ECanva.MINI_DEMON
const DM = ECanva.DEMON
const CH = ECanva.CHEST
const HE = ECanva.HERO
const W2 = ECanva.W2

window.addEventListener(
  'keydown',
  function (e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault()
    }
  },
  false
)

export const canvasDebuger = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, WL, WL],
  [WL, CH, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, WL],
  [WL, FL, FL, FL, FL, MD, FL, FL, FL, FL, TR, FL, FL, DM, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, CH, FL, FL, FL, MD, FL, TR, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, CH, FL, FL, FL, WL],
  [WL, FL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, W2, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
]

export const checkMoviment = (nexPosition: any, character: string, step?: number) => {
  const canvasValue = canvasDebuger[nexPosition.y][nexPosition.x]

  let result =
    character === Echaracter.HERO ? getHeroValidMoviment(canvasValue, step) : getEnemyValidMoviment(canvasValue)

  return result
}

export const getHeroValidMoviment = (canvasValue: number, steps?: number) => {
  return {
    valid:
      canvasValue === ECanva.FLOOR ||
      canvasValue === ECanva.DEMON ||
      canvasValue === ECanva.MINI_DEMON ||
      canvasValue === ECanva.TRAP ||
      canvasValue === ECanva.W2,
    dead:
      canvasValue === ECanva.TRAP || canvasValue === ECanva.DEMON || canvasValue === ECanva.MINI_DEMON || steps <= 0,
    chest: canvasValue === ECanva.CHEST,
    door: canvasValue === ECanva.DOOR,
  }
}

export const getEnemyValidMoviment = (canvasValue: number) => {
  return {
    valid: canvasValue === ECanva.FLOOR || canvasValue === ECanva.HERO,
    dead: canvasValue === ECanva.HERO,
    chest: canvasValue === ECanva.NOTHIN,
    door: canvasValue === ECanva.NOTHIN,
  }
}
