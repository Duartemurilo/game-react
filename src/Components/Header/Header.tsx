import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import SettingsIcon from '@mui/icons-material/Settings'
import { IPropsHeader } from './types'
import TimelineIcon from '@mui/icons-material/Timeline'
import { DifficultyContext } from '../../Context/Difficult/DifficutyContext'
import { music } from '../../Music/Music'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import { StepsContext } from '../../Context/StepsContext/StepsContext'

function Header(props: IPropsHeader) {
  const difficultyContext = useContext(DifficultyContext) as any
  const stepsContext = useContext(StepsContext) as any
  const [playmusic, setplayMusic] = useState(false)

  useEffect(() => {
    if (playmusic === true) {
      music.overworld.play()
    } else if (playmusic === false) {
      music.overworld.pause()
    }
  }, [playmusic])

  const handleDifficulty = (e: any) => {
    difficultyContext.setdifficultyState(e.target.value)
  }

  return (
    <div className="ContainerHeader">
      <p>Game-MD</p>
      <div className="ContainerButton">
        <button style={{ cursor: 'not-allowed' }}>
          <p>{stepsContext.stepsState.totalSteps} passos</p>
        </button>
        <button>
          <TimelineIcon style={{ fontSize: 40, cursor: 'pointer', right: 0 }} />
          <select onChange={handleDifficulty}>
            <option value="1">Iniciante</option>
            <option value="2">Intermediario</option>
            <option value="3">Dificil</option>
          </select>
        </button>
        <button onClick={() => props.currentDebugger(!props.debbuger)}>
          <SettingsIcon style={{ fontSize: 35, cursor: 'pointer', right: 0 }} />
          <p> Debuger</p>
        </button>
        <button onClick={() => setplayMusic(!playmusic)}>
          {playmusic === true ? (
            <MusicNoteIcon style={{ fontSize: 35, cursor: 'pointer', right: 0 }} />
          ) : (
            <MusicOffIcon style={{ fontSize: 35, cursor: 'pointer', right: 0 }} />
          )}
          <p>Musica</p>
        </button>
      </div>
    </div>
  )
}

export default Header
