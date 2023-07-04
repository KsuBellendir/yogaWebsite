import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import {FaWhatsapp, FaViber, FaTelegram, FaFacebook, FaInstagram} from 'react-icons/fa';
import {SlSocialVkontakte} from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='footer-container'>
        <h2 className='footer-text'>Присоединяйтесь к нам в соцсетях</h2>
        <div className='icon-container'>
            <NavLink to='https://chat.whatsapp.com/Jfg17Pptup8EGXTwccmuQK'>         
                <FaWhatsapp className='icon-whatsapp'/>
            </NavLink>
            <NavLink to=''>
                <FaViber className='icon-viber'/> 
            </NavLink>
            <NavLink to='https://t.me/+eO-Z-2lVk08yMzhi'>
                <FaTelegram className='icon-telegram'/>
            </NavLink>
            <NavLink to='https://vk.com/yoga_yley'>
                <SlSocialVkontakte className='icon-vk'/>
            </NavLink>
            <NavLink to='https://t.me/+eO-Z-2lVk08yMzhi' >
                <FaFacebook className='icon-fb'/>
            </NavLink>
            <NavLink to='https://www.instagram.com/linabelle.yoga/'>
                <FaInstagram className='icon-inst'/>
            </NavLink>
        </div>
    </div>
  )
}

export default Footer