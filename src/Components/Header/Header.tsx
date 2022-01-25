import React, { useContext } from 'react'
import './index.css'
import SettingsIcon from '@mui/icons-material/Settings'
import { IPropsHeader } from './types'
import TimelineIcon from '@mui/icons-material/Timeline'
import { DifficultyContext } from '../../Context/Difficult/DifficutyContext'

function Header(props: IPropsHeader) {
  const difficultyContext = useContext(DifficultyContext) as any

  const handleDifficulty = (e: any) => {
    difficultyContext.setdifficultyState(e.target.value)
  }

  return (
    <div className="ContainerHeader">
      <p>Game-MD</p>
      <div className="ContainerButton">
        <button>
          <TimelineIcon style={{ fontSize: 40, cursor: 'pointer', right: 0 }} />
          <select onChange={handleDifficulty}>
            <option selected value="1">
              Iniciante
            </option>
            <option value="2">Intermediario</option>
            <option value="3">Dificil</option>
          </select>
        </button>
        <button onClick={() => props.currentDebugger(!props.debbuger)}>
          <SettingsIcon style={{ fontSize: 40, cursor: 'pointer', right: 0 }} />
          <p> Debuger</p>
        </button>
      </div>
    </div>
  )
}

export default Header
