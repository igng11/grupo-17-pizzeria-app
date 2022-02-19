import React from 'react';
import './Browser.css';
import { FiSearch } from 'react-icons/fi';

const Browser = () => {
  return <div className='browser_'>
      
      <div className='search_icon'>
        <div className='search_cont'>
        <input className='browser_input' placeholder='Buscar'></input> 
        <div className='browser_icon'><FiSearch className='search'></FiSearch></div>
        </div>
      </div>
  </div>;
}

export default Browser;
