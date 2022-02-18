import React from 'react';
import './Promos.css';
import Promociones from './Items/Promociones';
import Combos from './Items/Combos';
import image0 from '../../../../assets/img/image_0.jpg';
import image1 from '../../../../assets/img/image_1.jpg';
import image2 from '../../../../assets/img/image_2.jpg';
import image3 from '../../../../assets/img/image_3.jpg';


const promos = [{ id:0,
                  name:'Menú'
                }, 
                {
                  id:1,
                  name:'Pizzas'
                }, 
                { id:2,
                  name:'Combos'
                }, 
                {
                  id:3,
                  name:'Promociones'
                }]

const combos = [{id:0,
                 combo: 'Combo familiar',
                 desc: '2 pizzas muzzarellas familiar y 1 cerveza Andes de 1lt',
                 price: '$ 1750',
                 image: image0
                },
                {id:1,
                  combo: 'Pizza con gusto + Refresco',
                  desc: '2 muzzarellas tamaño familiar y Coca de 2lt',
                  price: '$ 1600',
                  image: image1
                 },
                 {id:2,
                  combo: 'Pizza de la casa + Cerveza',
                  desc: '2 Pizzas de la casa y 1 cerveza Andes de 1lt',
                  price: '$ 1820',
                  image: image2
                 },
                 {id:3,
                  combo: 'Promo empanadas',
                  desc: '6 empanadas de carne/pollo y 1 cerveza Andes de 1lt',
                  price: '$ 850',
                  image: image3
                 },
              ]

function Promos() {
  return (
    <div className='promos_cont'>
        <Promociones promos={promos}></Promociones>
        <Combos combos={combos}></Combos>
    </div>
  )
}

export default Promos