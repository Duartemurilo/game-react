import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import './index.css'

function Footer() {
  return (
    <div className="FooterContainer">
      <p style={{ color: 'white', marginTop: 40, fontSize: 28, textAlign: 'center' }}>
        Feito Pelo brabo do Murilo <br />
        <FavoriteIcon style={{ marginTop: '2vh', fontSize: 30 }} />{' '}
      </p>
    </div>
  )
}

export default Footer
