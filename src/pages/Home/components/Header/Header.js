import React from 'react';
import './Header.css'

const Header = () => {
  return <div className='header_container'>
      <h3 className='header_title'>Pizzería Don Rémolo</h3>
      <label className='header_icons'>
        <i>🔔</i>
        <i>ℹ️</i> 
      </label>

  </div>;
}

export default Header;
