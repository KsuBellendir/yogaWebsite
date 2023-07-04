import React from 'react';
import './HeroSection.css';
import logo from '../../images/LogoFlower.png';
import '../../font/Pacifico-Regular.ttf'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <img className='hero-img' src={logo} alt='цветок лотоса'/>
        <h1>Обретите гармонию разума и тела с помощью магии йоги</h1>
    </div>
  )
}
export default HeroSection;