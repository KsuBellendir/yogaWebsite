import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import About from './About/About';
import Teachers from '../components/Teachers/Teachers';
import Practice from './Practice/Practice';
import Price from './Price/Price';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <HeroSection/>
     <About/> 
     <Teachers/>
     <Practice/>
     <Price/>
     <Footer/>
    </>
  )
}

export default Home;