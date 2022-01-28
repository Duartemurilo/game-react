// eslint-disable-next-line
import { createContext, useContext, useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'

export const StepsContext = createContext({
  totalSteps: 51,
  updateSteps: (level?: number) => null,
})

export function StepsProvider(props: IpropsContext) {
  let totalSteps = 71

  const [stepsState, setSteps] = useState({
    totalSteps: totalSteps,
    updateSteps: (level?: number) => {
      setSteps((prevState): any => {
        let easy = 71
        let medium = 61
        let hard = 41

        if (level === 0) {
          return {
            totalSteps: easy - 1,
            updateSteps: prevState.updateSteps,
          }
        }
        if (level === 1) {
          return {
            totalSteps: medium - 1,
            updateSteps: prevState.updateSteps,
          }
        }
        if (level === 2) {
          return {
            totalSteps: hard - 1,
            updateSteps: prevState.updateSteps,
          }
        }

        return {
          totalSteps: prevState.totalSteps - 1,
          updateSteps: prevState.updateSteps,
        }
      })
    },
  })
  return <StepsContext.Provider value={{ stepsState }}>{props.children}</StepsContext.Provider>
}
