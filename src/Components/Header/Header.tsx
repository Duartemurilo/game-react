import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import SettingsIcon from '@mui/icons-material/Settings'
import { IPropsHeader } from './types'
import TimelineIcon from '@mui/icons-material/Timeline'
import { music } from '../../Music/Music'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import { StepsContext } from '../../Context/StepsContext/StepsContext'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'

function Header(props: IPropsHeader) {
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
    const value = e.target.value
    const result = parseFloat(value)

    stepsContext.stepsState.updateSteps(result)
  }

  return (
    <div className="ContainerHeader">
      <p style={{ color: 'white' }}>GAME-MD</p>
      <div className="ContainerButton">
        <button style={{ cursor: 'not-allowed' }}>
          <DirectionsWalkIcon style={{ fontSize: 30, cursor: 'pointer', right: 0 }} />
          <p>{stepsContext.stepsState.totalSteps} passos</p>
        </button>

        <button>
          <TimelineIcon style={{ fontSize: 30, right: 0 }} />
          <select onChange={handleDifficulty}>
            <option value={0}>Iniciante</option>
            <option value={1}>Intermediario</option>
            <option value={2}>Dificil</option>
          </select>
        </button>

        <button onClick={() => props.currentDebugger(!props.debbuger)}>
          <SettingsIcon style={{ fontSize: 30, cursor: 'pointer', right: 0 }} />
          <p> Debuger</p>
        </button>
        <button onClick={() => setplayMusic(!playmusic)}>
          {playmusic === true ? (
            <MusicNoteIcon style={{ fontSize: 30, cursor: 'pointer', right: 0 }} />
          ) : (
            <MusicOffIcon style={{ fontSize: 30, cursor: 'pointer', right: 0 }} />
          )}
          <p>Musica</p>
        </button>
      </div>
    </div>
  )
}

export default Header
