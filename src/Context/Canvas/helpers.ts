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
}

const FL = ECanva.FLOOR
const WL = ECanva.WALL
const DR = ECanva.DOOR
const TR = ECanva.TRAP
const MD = ECanva.MINI_DEMON
const DM = ECanva.DEMON
const CH = ECanva.CHEST
const HE = ECanva.HERO

export const canvasDebuger = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, CH, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, WL],
  [WL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
  [WL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DM, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, HE, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
]

export const checkMoviment = (nexPosition: any, character: string) => {
  const canvasValue = canvasDebuger[nexPosition.y][nexPosition.x]

  let result = character === Echaracter.HERO ? getHeroValidMoviment(canvasValue) : getEnemyValidMoviment(canvasValue)

  return result
}

export const getHeroValidMoviment = (canvasValue: number) => {
  return {
    valid:
      canvasValue === ECanva.FLOOR ||
      canvasValue === ECanva.DEMON ||
      canvasValue === ECanva.MINI_DEMON ||
      canvasValue === ECanva.CHEST,
    dead: canvasValue === ECanva.TRAP || canvasValue === ECanva.DEMON || canvasValue === ECanva.MINI_DEMON,
    chest: canvasValue === ECanva.CHEST,
    door: canvasValue === ECanva.DOOR,
  }
}

export const getEnemyValidMoviment = (canvasValue: number) => {
  return {
    valid: canvasValue === ECanva.FLOOR || canvasValue === ECanva.HERO,
    dead: canvasValue === ECanva.NOTHIN,
    chest: canvasValue === ECanva.NOTHIN,
    door: canvasValue === ECanva.NOTHIN,
  }
}
