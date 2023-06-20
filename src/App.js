import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
    </div>
  )
}

export default App