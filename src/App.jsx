import { useState } from 'react'
import './App.scss'
import Experience from './Experience/Experience'
import Modal from './components/Modal/Modal'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
        <Modal/>
        <Experience/>
    </>

  )
}

export default App
