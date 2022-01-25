import React from 'react';
import Input from '../Login/components/Input/Input';
import Logo from '../Login/components/Logo/Logo';
import './Create_user.css'

function Create_user() {
  return <div className='cu_container'>
      
          <Logo/>
          <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Nombre'
          }}
          />
          <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Email'
          }}
          />
          <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Contraseña'
          }}
          />
          <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Confirmar contraseña'
          }}
          />
          <br/>
      <button className='cu_btn'>
          Ingresar
      </button>
    {/* //   onClick={handleSubmit}> */}
  </div>;
}

export default Create_user;