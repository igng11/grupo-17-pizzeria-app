import React from 'react';
import './Onboarding.css';
import img_logo from '../../assets/img/logo_img.png';


function Onboarding() {
  return <div className='container'>
      <img className='logo_img' src={img_logo} alt='logo_img'/>
  </div>;
}

export default Onboarding;
