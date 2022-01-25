import React, { useState } from 'react'
import { canvasDebuger, checkMoviment, ECanva, handleNextPosition } from '../Canvas/helpers'

interface Iprops {
  children: React.ReactNode
}
export const AuthContext = React.createContext({
  canva: [],
  uptadecanvas: (direction: number, postion: number, walker: string) => null,
})

export const AuthProvider = (props: Iprops) => {
  const [canvasState, setCanvas] = useState({
    canvas: canvasDebuger,
    uptadecanvas: (direction: number, postion: any, walker: string) => {
      const nextMove = handleNextPosition(direction, postion)
      const isValidMoviment = checkMoviment(nextMove, walker)

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
