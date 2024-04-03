import React from 'react'
import "../Utils/Scrollbar.css"
const Hero = () => {
  return (
    <div className="App">
      <div style={{ width: '1580px', height: '1080px', overflow: 'hidden' }}>
        <iframe
          title="ExternalContent"
          src="https://cvlab-zero123-live.hf.space/"
          style={{ width: '1580px', height: '1080px', marginTop: '-185px' }}
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Hero