import React from 'react';
import './Combos.css'

const Combos = (props) => {
  return (
    <div className='cards_cont'> 
      {props.combos.map(
        c => (
          <div className='card_combo' key={c.id}> 
            <div className='card_desc'> <p className='title_desc'>{c.combo}</p> <p>{c.desc}</p> 
            <p className='price'>{c.price}</p> 
            </div> 
            <div ><img className='img_card' src={c.image} alt='img_card'></img> </div>
           </div>
                  ))}
          </div>
        )}

export default Combos