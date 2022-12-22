import React from 'react'
import reactLogo from './src/images/react-icon-small.png'
import './styles/styles.css'

export default function NavBar() {
  return (
    <nav>
      <div className="nav-title">
        <img src={reactLogo} alt="react-logo" className='logo'/>
        <h2>ReactFacts</h2>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  )
}