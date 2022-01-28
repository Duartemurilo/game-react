import { createContext, useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'

export const ChestContext = createContext({
  totalChest: 3,
  openChest: {
    total: 0,
    position: [],
  },
  uptadeChest: (position) => null,
})

let totalchest = 3

export function ChestProvider(props: IpropsContext) {
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
