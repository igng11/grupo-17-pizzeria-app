import React, { useState } from 'react';
import './Login.css';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Forget_pass from './components/Forget_pass/Forget_pass';

 const Login = () => {
  
const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState(false);

function handleChange(name, value) {
    if(name === 'usuario'){
        setUser(value)
    }
    else {
        if (value.length < 6) {
            passwordError(true)
        } else {
            setPasswordError(false);
            setPassword(value)
        }
        
    }
}

function handleSubmit () {
    let account = {user, password}
    if (account) {
        console.log('account', account)
    }
}

return (
  <div className='login_container'>
      <Logo/>
      <Label text= ""/>
      <Input
      attribute={{
          id: 'usuario',
          name: 'usuario',
          type: 'text',
          placeholder: 'Email'
        }}
      handleChange={handleChange}
      />
      <Label text= ""/>
      
      <Input
      attribute={{
          id: 'contraseña',
          name: 'usuario',
          type: 'password',
          placeholder: 'Contraseña'
        }}
      handleChange={handleChange}
      param={passwordError}
      />
      <Forget_pass text='¿Olvidaste tu contraseña?'/>
      <br/>
      <br/>
      <button className='login_botton' onClick={handleSubmit}>
          Ingresar
      </button>
      <Register text= "Registrarme"/>
</div>
  )
}

export default Login;