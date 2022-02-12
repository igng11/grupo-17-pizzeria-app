import React from 'react';
import img_logo from '../../../../assets/img/logo_img.png';
import './logo.css'

const Logo = () => {
  return <div className='logo_cont'> 
            <img className='logo_img' src={img_logo} alt='logo_img'/> 
        </div>;

}

export default Logo;
