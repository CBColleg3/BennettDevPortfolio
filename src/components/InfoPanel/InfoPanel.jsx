import React from 'react'
import './InfoPanel.scss'
import { useModalStore } from '../../Experience/stores/modalStore'
import {FaGithub, FaEnvelope, FaLinkedinIn, FaYoutube,FaItchIo} from "react-icons/fa";

const InfoPanel = () => {

    const [contactPanel, SetContactPanel] = React.useState(false);
    const { isModalOpen, modalTitle, modalContent, modalType, closeModal } = useModalStore();

    const openContactPanel = () => {
      SetContactPanel(!contactPanel);
    }

    if(isModalOpen) return;



  return (
    <div className='overlay-panel'>
      <div>
        <a href={"https://drive.google.com/file/d/1CBmCTIIyQc_3Pwlho9px3XOzc--rIyLU/view?usp=sharing"}>
          <button className='button-info'>Resume</button>
        </a>
      </div>

      <div>
        <button className='button-info' onClick={openContactPanel}>Contact Me</button>
      </div>

      {contactPanel && <div className='contact-dropdown'>
          
          <p className='email-text'> Contact me at </p>
          <p className='email-text'> bennettdeveloper@gmail.com </p>
          <div> 
            <a href='mailto:bennettdeveloper@gmail.com'>
              <FaEnvelope/> 
            </a>
          </div>

          <p className='email-text'> or follow me on social media! </p>
          <div className='button-icon-container'>
            <a href='https://github.com/CBColleg3'>
              <FaGithub className='button-icon'/> 
            </a>        
            <a href='https://www.linkedin.com/in/christopher-bennett-b11167168/'> 
              <FaLinkedinIn className='button-icon'/>
            </a>
            <a href='https://www.youtube.com/@UnityJunkie'>
              <FaYoutube className='button-icon'/>
            </a>

            <a href='https://spacegames3.itch.io/'>
              <FaItchIo className='button-icon'/>
            </a>
                
          </div>
        
        </div>}
    </div>

  )
}

export default InfoPanel