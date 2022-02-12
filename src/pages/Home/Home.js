import React from 'react';
import Browser from './components/Browser/Browser';
import Header from './components/Header/Header';
import Icons from './components/Icons_nav/Icons';
import Nav from './components/Nav/Nav';
import Promos from './components/Promos/Promos';

function Home() {
  return <div>
      <Header/>
      <Icons/>
      <Nav/>
      <Browser/>
      <Promos/>
  </div>;
}

export default Home;
