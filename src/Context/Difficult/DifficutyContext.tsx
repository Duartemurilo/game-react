import React, { useState } from 'react'

interface Iprops {
  children: React.ReactNode
}
export const DifficultyContext = React.createContext({
  difficultyState: 0,
  setdifficultyState: () => null,
})

export const DifficultyProvider = (props: Iprops) => {
  const [difficultyState, setdifficultyState] = useState({})

  return (
    <DifficultyContext.Provider value={{ difficultyState, setdifficultyState }}>
      {props.children}
    </DifficultyContext.Provider>
  )
}
