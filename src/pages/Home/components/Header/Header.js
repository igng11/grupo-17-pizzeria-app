import React from 'react';
import './Header.css'
import { MdCircleNotifications} from "react-icons/md";
import {FaInfoCircle} from "react-icons/fa";
import Logo from '../../../../assets/img/logo_bw.svg';
;


const Header = () => {
  return <div className='header_container'>
      <img className='logo_bw' src={Logo}></img>
      {/* <label className='header_icons'>
        <MdCircleNotifications className='icons'/>
        <FaInfoCircle className='icons' /> 
      </label> */}

  </div>;
}

export default Header;
