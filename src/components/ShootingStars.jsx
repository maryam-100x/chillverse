import React, { useEffect } from 'react';

const ShootingStars = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight / 2;
      
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      
      // Random delay and duration
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
      
      star.style.animationDelay = `${delay}s`;
      star.style.animationDuration = `${duration}s`;
      
      document.body.appendChild(star);
      
      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, (delay + duration) * 1000);
    };
    
    // Create initial stars
    for (let i = 0; i < 5; i++) {
      createShootingStar();
    }
    
    // Create new stars at intervals
    const interval = setInterval(createShootingStar, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ShootingStars;