import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Outlet } from 'react-router'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
