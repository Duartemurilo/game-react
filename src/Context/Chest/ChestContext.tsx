import { createContext, useState } from 'react'
import { canvasDebuger, ECanva } from '../Canvas/helpers'

interface IProps {
  children: React.ReactNode
}

export const ChestContext = createContext({
  totalChest: 2,
  openChest: {
    total: 0,
    position: [],
  },
  uptadeChest: (position) => null,
})

let totalchest = 0

canvasDebuger.forEach((item) => {
  item.forEach((item) => {
    if (item === ECanva.CHEST) {
      return totalchest++
    }
  })
})

export function ChestProvider(props: IProps) {
  const [chestState, setChest] = useState({
    totalChest: totalchest,
    openChest: {
      total: 0,
      position: [],
    },

    uptadeChest: (position) => {
      setChest((prevState): any => {
        return {
          totalChest: prevState.totalChest,
          openChest: {
            total: prevState.openChest.total + 1,
            position: prevState.openChest.position.concat(position),
          },
          uptadeChest: prevState.uptadeChest,
        }
      })
    },
  })

  return <ChestContext.Provider value={{ chestState }}>{props.children}</ChestContext.Provider>
}
