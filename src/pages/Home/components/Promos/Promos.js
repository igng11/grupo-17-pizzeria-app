import React from 'react';
import './Promos.css'
import Combos from './Items/Combos';
import Menu from './Items/Menu';
import Pizzas from './Items/Pizzas';
import Promociones from './Items/Promociones';


function Promos() {
  return (
    <div className='promos_cont'>
        <div className='div_promo'></div><Menu />
        <div className='div_promo'></div><Promociones />
        <div className='div_promo'></div><Combos/>
        <div className='div_promo'></div><Pizzas/>
    </div>
  )
}

export default Promos