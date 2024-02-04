import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className='container'>
      <ul>
        <li>LPA5S</li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  )
}
