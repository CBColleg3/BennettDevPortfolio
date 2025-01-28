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

        <div>Short Capture The Flag problem I did for the Blue Hens Capture The Flag 2024 Competition. Solution involves hacking the game!</div>


        
        <div className='ctf-button-container'>
            <a href={"https://spacegames3.itch.io/cut-the-flag"}>
                <button>Visit Project</button>
            </a>
        </div>

    </div>

  )
}

export default CTF