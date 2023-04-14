import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/'>
      <header className='hero'>
          <h1>
              Endless English Exercises
          </h1>
          <h2>
              Practice as much as you want!
          </h2>
      </header>
    </Link>
  )
}

export default Header