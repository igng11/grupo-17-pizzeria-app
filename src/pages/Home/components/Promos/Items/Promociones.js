import React from 'react';
import Onboarding from '../../../../Onboarding/Onboarding';
import './Promociones.css'

const Promociones = (props) => {
  return (
    <div className='div_promo'>
        {props.promos.map(
          p => (<button key={p.id} className='promos_button' onClick={Onboarding}>{p.name}</button>)
        )}
    </div>
  )
}

export default Promociones