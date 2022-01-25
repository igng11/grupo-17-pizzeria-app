import React from 'react';
import Browser from './components/Browser/Browser';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function Home() {
  return <div>
      <Header/>
      <Nav/>
      <Browser/>
  </div>;
}

export default Home;
