import React from 'react';
import './Popup.css';
import done from './done_inv.svg'

function Popup() {
  return <div className='popup_conteiner'>
            <label >
                <h2>
                    ¡Registro <br/> completo!
                </h2>
                <h3>
                    En un instante podrás revisar <br/> tu menú y hacer tu pedido
                </h3>
                <img className='done' src={done} alt='done_image'></img>
            </label>
         </div>
}

export default Popup;
