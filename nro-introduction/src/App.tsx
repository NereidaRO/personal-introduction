import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
