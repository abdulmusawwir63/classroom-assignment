import React from 'react'
import './Front.css'

const Front = () => {
  const logoSrc = process.env.PUBLIC_URL + '/download.png' 
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-left'>
          <img src={logoSrc} alt='Classroom logo' className='logo-icon' />
          <h1 className='room'>Classroom</h1>
        </div>    
        <div className='navbar-right'>
          <button className='create-btn'>+</button>
          <div className='profile-icon'>A</div>
        </div>
      </nav>
    </div>
  )
}

export default Front