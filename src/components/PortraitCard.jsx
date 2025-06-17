import React from 'react'
import './PortraitCard.css'

const PortraitCard = ({ name, username, image }) => {
  return (
    <div className="portrait-card">
      <div className="frame">
        <img src={image} alt={name} />
      </div>
      <a href={`https://x.com/${username}`} target="_blank" rel="noopener noreferrer">
        @{username}
      </a>
    </div>
  )
}

export default PortraitCard
