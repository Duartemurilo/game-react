import React, { useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'

export const DifficultyContext = React.createContext({
  difficulty: 0,
  updatedifficulty: () => null,
})

let difficulty = 0

export const DifficultyProvider = (props: IpropsContext) => {
  const [difficultyState, setDifficultyState] = useState({
    difficulty: difficulty,
    updatedifficulty: (level) => {
      setDifficultyState((prevState): any => {
        return { difficulty: prevState.difficulty + 1, updatedifficulty: prevState.updatedifficulty }
      })
    },
  })

  return <DifficultyContext.Provider value={{ difficultyState }}>{props.children}</DifficultyContext.Provider>
}
