import React, { useMemo } from 'react'
import { portraits } from '../data/portraits'
import PortraitCard from './PortraitCard'
import './Gallery.css'

const Gallery = () => {
  const shuffledPortraits = useMemo(() => {
    const copy = [...portraits]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }, [])

  return (
    <div className="gallery">
      {shuffledPortraits.map((p, index) => (
        <PortraitCard key={index} {...p} />
      ))}
    </div>
  )
}

export default Gallery
