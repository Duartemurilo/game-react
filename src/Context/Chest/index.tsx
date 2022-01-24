import { createContext, useState } from 'react'

interface IProps {
  children: React.ReactNode
}

export const ChestContext = createContext({
  totalChest: 2,
  openChest: {
    total: 0,
    position: [],
  },
  uptadeChest: () => null,
})

export function ChestProvider(props: IProps) {
  const [chestState, setChest] = useState({
    totalChest: 2,
    openChest: {
      total: 0,
      position: [],
    },

    uptadeChest: () => {
      console.log('chest')
    },
  })

  return <ChestContext.Provider value={{ chestState }}>{props.children}</ChestContext.Provider>
}
