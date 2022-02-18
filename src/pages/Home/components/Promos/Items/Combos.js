import React from 'react'

const Combos = (props) => {
  return (
    <div className='cards_cont'> 
      {props.combos.map(
        c => (
          <div className='card_combo' key={c.id}> 
            <div className='card_desc'> <p>{c.combo}</p> <br/> {c.desc} <br/> {c.price} </div> 
            <div ><img className='img_card' src={c.image} alt='img_card'></img> </div>
           </div>
                  ))}
          </div>
        )}

export default Combos