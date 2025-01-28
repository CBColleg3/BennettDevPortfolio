import React from 'react'
import './CTF.scss'

const CTF = () => {
  return (
    <div className='ctf-container'>
        
        <div className='ctf-image-container'>
            <img className="ctf-image" src="/images/cuttheflagimage.png"></img>
        </div>


        <h3 className='ctf-title'>Cut The Flag</h3>
        <i className='ctf-timeframe'>Oct 2024 - Nov 2024</i>
        
        <h4  className='ctf-header'>Reverse Engineering Problem</h4>

        <div>Short <a href='https://fieldeffect.com/blog/capture-the-flag-cybersecurity'>Capture The Flag</a> problem completed for the Blue Hens Capture The Flag 2024 Competition. 
          Features Anti-Cheat functionalities with Firebase Cloud Functions and the Realtime Database for storing user data. 
          The game is intentionally impossible to beat without looking into the code and trying to crack the anti-cheat, once a reverse engineered solution is found the flag will be given.
        </div>


        
        <div className='ctf-button-container'>
            <a href={"https://spacegames3.itch.io/cut-the-flag"}>
                <button>Visit Project</button>
            </a>
        </div>

        <div className='ctf-button-container'>
            <a href={"https://ctftime.org/event/2512/"}>
                <button>View Competition Results Here</button>
            </a>
        </div>

    </div>

  )
}

export default CTF