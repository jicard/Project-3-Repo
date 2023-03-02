import React from 'react';
import '../../App.css';
import HomePage from '../HomePage';
import Footer from '../footer';
import Header from '../header';

function Home() {
  return (
    <>
      <Header/>
      <HomePage />
      <Footer />
    </>
  );
}

export default Home;