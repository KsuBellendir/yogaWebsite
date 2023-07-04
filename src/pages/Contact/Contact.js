import React from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';
import {FaWhatsapp, FaViber, FaTelegram, FaFacebook, FaInstagram} from 'react-icons/fa';
import {SlSocialVkontakte} from 'react-icons/sl';


const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='nomber'>
        <h5 className='contact-h5'>Вы можете связаться с нами по следующим номерам телефона</h5>
        <p className='contact-p'> +(917) 445 95 36 Галина</p>
        <p className='contact-p'> +(917) 414 28 23 Анна</p>
      </div>
      <div className='social-network'>
        <h5 className='contact-h5'>Мы есть в любом удобном для вас мессенджере</h5>
        <div className='contact-mess'>
          <NavLink to='https://chat.whatsapp.com/Jfg17Pptup8EGXTwccmuQK'>         
            <FaWhatsapp className='icon-whatsapp'/>
          </NavLink>
          <NavLink to=''>
            <FaViber className='icon-viber'/> 
          </NavLink>
          <NavLink to='https://t.me/+eO-Z-2lVk08yMzhi'>
          <FaTelegram className='icon-telegram'/>
          </NavLink>
        </div>
        <div className='contact-network'>
        <h5 className='contact-h5'>Присоеденяйтесь к нам в соцсетях</h5>
          <NavLink to='https://vk.com/yoga_yley' className='contact-link'>
            <SlSocialVkontakte className='icon-vk'/>
          </NavLink>
          <NavLink to='https://t.me/+eO-Z-2lVk08yMzhi' className='contact-link'>
            <FaFacebook className='icon-fb'/>
          </NavLink>
          <NavLink to='https://www.instagram.com/linabelle.yoga/' className='contact-link'>
            <FaInstagram className='icon-inst'/>
          </NavLink>
        </div>
        <h5 className='contact-text'>Будем рады видеть вас на наших занятиях</h5>
      </div>
    </div>
  )
}

export default Contact;