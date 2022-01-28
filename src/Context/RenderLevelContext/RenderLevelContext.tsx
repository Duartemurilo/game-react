// eslint-disable-next-line
import { createContext, useContext, useState } from 'react'
import { IpropsContext } from '../../Constants/interfaceContext'

export const RenderContext = createContext({
  renderLevel: true,
  updateRenderLevel: () => null,
})

export function RenderProvider(props: IpropsContext) {
  let renderLevel = true

  const [renderLevelState, setRenderLevel] = useState({
    renderLevel: renderLevel,
    updateRenderLevel: () => {
      setRenderLevel((prevState): any => {
        return {
          renderLevel: false,
          updateRenderLevel: prevState.updateRenderLevel,
        }
      })
    },
  })
  return <RenderContext.Provider value={{ renderLevelState }}>{props.children}</RenderContext.Provider>
}
