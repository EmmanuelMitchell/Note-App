import React from 'react'

const Header = ({handleToggleDark}) => {
  return (
    <div className='header'>
      <h1>Note-App</h1>
      <button 
      onClick={()=>handleToggleDark((prevousDarkMode)=> !prevousDarkMode)} 
      className='save'>toggle mode</button>
    </div>
  )
}

export default Header
