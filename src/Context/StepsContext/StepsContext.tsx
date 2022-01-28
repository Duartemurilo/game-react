// eslint-disable-next-line
import { createContext, useContext, useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'
// import { DifficultyContext } from '../Difficult/DifficutyContext'

export const StepsContext = createContext({
  totalSteps: 51,
  updateSteps: (number: number) => null,
})

export function StepsProvider(props: IpropsContext) {
  // const difficultyContext = useContext(DifficultyContext) as any

  let totalSteps = 51

  const [stepsState, setSteps] = useState({
    totalSteps: totalSteps,
    updateSteps: (number) => {
      setSteps((prevState): any => {
        return {
          totalSteps: prevState.totalSteps - 1,
          updateSteps: prevState.updateSteps,
        }
      })
    },
  })
  return <StepsContext.Provider value={{ stepsState }}>{props.children}</StepsContext.Provider>
}
