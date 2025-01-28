import { useState } from 'react'
import './App.scss'
import Experience from './Experience/Experience'
import Modal from './components/Modal/Modal'
import Projects from './components/Projects/Projects'
import InfoPanel from "./components/InfoPanel/InfoPanel"

function App() {
  return (
    <>
        <Modal/>

        <Experience/>
        <InfoPanel/>
    </>

  )
}

export default App
