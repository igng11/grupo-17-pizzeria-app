import React from 'react';
import './Icons.css';
import { IoMdChatboxes } from 'react-icons/io';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';


function Icons() {
  return (<div>
        <div className='tl'></div>
    <div className='nav_icon_cont'>
        <p><IoMdChatboxes size='36px' color='#E74423' className='icon_'/></p>
        <p><BsQuestionCircleFill size='26px' color='#E74423' className='icon_'/></p>
        <p><AiFillBell size='36px' color='#E74423' className='icon_'/></p>
        <p><AiFillInfoCircle size='31px' color='#E74423' className='icon_'/></p>
    </div>
        <div className='bl'></div>
        </div>
  )
}

export default Icons