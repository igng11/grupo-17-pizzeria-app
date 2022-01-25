import React from 'react';
import img_logo from './logo_img.jpg';
import './logo.css'

const Logo = () => {
  return <div> 
            <img className='logo_img' src={img_logo} alt='logo_img'/> 
        </div>;

}

export default Logo;
