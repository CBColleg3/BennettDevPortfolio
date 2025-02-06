import React, {useState, useEffect} from 'react'
import "./LoadingScreen.scss";
import { useProgress, useGLTF } from '@react-three/drei';
import { useRevealStore } from '../../Experience/stores/revealStore';

const LoadingScreen = () => {
    const { progress } = useProgress();
    //const [isRevealed, setIsRevealed] = useState(false);
    //const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    const {isRevealed, setIsRevealed, isAnimationFinished, setIsAnimationFinished} = useRevealStore();

    useGLTF.preload('/portfolio_animated-transformed.glb');

    const handleReveal = () => {
        setIsRevealed(true);
    }

    const handleAnimationFinished = () => {
        setIsAnimationFinished(true);
    }


    useEffect(()=> {
        if(progress) {  

            if(progress >= 100 && useGLTF) {
                handleReveal();
            }
        }
    }, [progress]);

    
    if(isAnimationFinished) {
        return null;
    }
    
  return (
    <>
        <div className='loading-screen'>
            <div className={`background-top-half ${isRevealed ? 'revealed': ''}`} onTransitionEnd={handleAnimationFinished}></div>
            <div className={`background-bottom-half ${isRevealed ? 'revealed': ''}`}></div>
   
            <div className='loading-screen-info-container'>
                <img src='images/chrismodel.png' className={`loading-screen-image ${isRevealed ? 'revealed': ''}`}></img>
                <div className={`loading-screen-title ${isRevealed ? 'revealed': ''}`}>Christopher Bennett's Personal Porfolio</div>
                {progress < 100 ? (      
                        <div className='loading-bar-container'>
                            <div 
                                className='loading-bar' 
                                style={{width: `${progress}%`}}
                            ></div>     
                        <div className='percentage'>{Math.round(progress)}%</div>
                        </div>
                    ) : (null)}
            </div>
        </div>
    </>
  )
}

export default LoadingScreen