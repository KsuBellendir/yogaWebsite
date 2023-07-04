import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-h1'> О нас</h1>
      <p className='about-p'> С нами вы сможете заниматься из любой точки мира в удобное для вас время.
         Для достижения лучших результатов наши преподаватели работают индивидуально с каждым. 
         Мы подберем вам практики подходящие для любого уровня подготовки, возраста и целей.
      </p>
      <div className='about-prep'>
        <h1 className='about-h2'>Занятия с Linabelle</h1>
        <p className='about-p'>Online занятия с максимально гибкими условиями.</p>
        <li className='about-li1'>Любое устройство</li>
        <li className='about-li2'>Смартфон, планшет, ноутбук. Есть камера? Вам подходит!</li>
        <li className='about-li3'>Любой мессенджер</li>
        <li className='about-li2'>Skype, Zoom, Telegram, Whatsapp, Viber и прочие. Всё для Вашего удобства.</li>
        <li className='about-li4'>Когда угодно и где угодно</li>
        <li className='about-li2'>Любое время суток. Любой часовой пояс. Дом, парк, пляж, офис.</li>
        <li className='about-li5'>С заботой о Вас</li>
        <li className='about-li2'>Укреплять здоровье с Linabelle - это просто.</li>
      </div>
    </div>
  )
}

export default About