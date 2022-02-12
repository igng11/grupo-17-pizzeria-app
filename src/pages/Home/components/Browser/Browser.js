import React from 'react';
import './Browser.css';
import { FiSearch } from 'react-icons/fi';

const Browser = () => {
  return <div className='browser_'>
      
      <div className='search_icon'>
        <input className='browser_input' placeholder='Buscar'></input> 
        {/* <div><FiSearch className='search'></FiSearch></div> */}
      
      </div>
  </div>;
}

export default Browser;
