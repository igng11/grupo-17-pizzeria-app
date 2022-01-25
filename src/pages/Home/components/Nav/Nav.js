import React from 'react';
import './Nav.css'

const Nav = ()=> {
  return <div className='nav_container'>
      <label className='time_delivery'> <p>Entrega en:</p>  <i>👥 ❔</i></label> 
      <label>Costo de envío</label>
      <div>
      <label>★</label>
      <label>★</label>
      <label>★</label>
      <label>★</label>
      <label>★</label>
      </div>
  </div>;
}

export default Nav;
