import React, { Fragment, useState } from 'react';
import './App.css';
import Popup from './pages/Create_user/components/Popup/Popup';
import Create_user from './pages/Create_user/Create_user';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Onboarding from './pages/Onboarding/Onboarding';
// import {
//   BrowserRouter as Router,
//   Login,
//   Onboarding,
//   Home
// } from "react-router-dom";

function App() {

  return (
    <div className='app'>
      {/* <Onboarding/> */}
      {/* <Login/> */}
      {/* <Create_user/> */}
      {/* <Popup/> */}
      <Home/>
    </div>
  );
}

export default App;
