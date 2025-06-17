import React from 'react';
import Gallery from './components/Gallery';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './App.css';
import ShootingStars from './components/ShootingStars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRocket, faMeteor } from '@fortawesome/free-solid-svg-icons';

function App() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="App">
      {/* Cosmic Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#9c88ff", "#00a8ff", "#4cd137", "#e84118"],
            },
            links: {
              color: "#9c88ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 100,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            shape: {
              type: ["circle", "triangle", "star"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1
              }
            }
          },
          detectRetina: true,
        }}
      />
      
      {/* Nebula Gradient Overlay */}
      <div className="nebula-overlay"></div>
      
      {/* Content */}
      <div className="content-wrapper">
        {/* Professional Header */}
        <div className="header-container">
          <div className="header-content">
            <h1 className="title">ChillVerse Gallery</h1>
            <div className="subtitle">
  <a
    className="location"
    href="https://x.com/ChillverseSOL"
    target="_blank"
    rel="noopener noreferrer"
  >
    @ChillVerseSOL
  </a>
  <span className="separator">|</span>
  <a
    className="subtitle-link"
    href="https://pump.fun/coin/C4ZKqN77JPR9z8rYY9JTtUQDx5b37mGiq1vYcHfNpump"
    target="_blank"
    rel="noopener noreferrer"
  >
    Pump.fun
  </a>
  <span className="separator">|</span>
  <a
    className="subtitle-link"
    href="https://dexscreener.com/solana/gw7whqtu12ctqucdktht1rjposzzpaw5umnzzjxkw2a"
    target="_blank"
    rel="noopener noreferrer"
  >
    Dex
  </a>
</div>

          </div>
        </div>
        <div className="ca-copy-container">
  <button
    className="ca-copy-button"
    onClick={() => {
      navigator.clipboard.writeText("C4ZKqN77JPR9z8rYY9JTtUQDx5b37mGiq1vYcHfNpump");
      const btn = document.querySelector(".ca-copy-button");
      btn.innerText = "✓ Copied!";
      setTimeout(() => (btn.innerText = "CA: C4ZKq...pump"), 2000);
    }}
  >
    CA: C4ZKq...pump
  </button>

  <a
    className="ca-copy-button"
    href="https://x.com/i/communities/1934377812473049244"
    target="_blank"
    rel="noopener noreferrer"
  >
    𝕏 Community
  </a>
</div>



        <Gallery />
        <ShootingStars />
      </div>
    </div>
  );
}

export default App;