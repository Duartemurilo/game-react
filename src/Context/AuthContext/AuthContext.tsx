import React, { useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'
import { canvasDebuger, checkMoviment, ECanva, handleNextPosition } from '../Canvas/helpers'

export const AuthContext = React.createContext({
  canva: [],
  uptadecanvas: (direction: number, postion: number, walker: string, step?: number) => null,
})

export const AuthProvider = (props: IpropsContext) => {
  const [canvasState, setCanvas] = useState({
    canvas: canvasDebuger,
    uptadecanvas: (direction: number, postion: any, walker: string, step?: number) => {
      const nextMove = handleNextPosition(direction, postion)
      const isValidMoviment = checkMoviment(nextMove, walker, step)

      if (isValidMoviment.valid) {
        setCanvas((prevState): any => {
          const newcanvas: object = [...prevState.canvas]
          const currentValue = newcanvas[postion.y][postion.x]

          newcanvas[postion.y][postion.x] = ECanva.FLOOR
          newcanvas[nextMove.y][nextMove.x] = currentValue

          return { canvas: newcanvas, uptadecanvas: prevState.uptadecanvas }
        })
      }

      return { nextMove: nextMove, isValidMoviment: isValidMoviment }
    },
  })
  return <AuthContext.Provider value={{ canvasState }}>{props.children}</AuthContext.Provider>
}
