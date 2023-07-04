import React from 'react';
import { NavLink } from 'react-router-dom';
import './Teachers.css';
import imgAn from '../../images/imgAn.jpg';
import imgGal from '../../images/imgGal.jpg';
import Slider from '../Slider/Slider';
import dataAnna from '../../data/Data.js';
import dataGala from '../../data/dataGala';


const Teachers = () => {
  return (
    <div className='teachers-container'>
        <h1>Наши преподаватели</h1>
        <p>Каждый из них имеет как минимум 5-летний опыт персональной практики йоги и более 3 лет преподавания</p>
        <div className='ava-teachers-container'>
            <div to='/galina' className='ava-teachers'>
                <img className='ava-img' src={imgGal} alt='фото тренера'/>
                <h2 className='ava-h2'>Галина</h2>
                <p className='ava-p'>Сертифицированный тренер йоги</p>
                <Slider data={dataGala} maxInd={9} minInd={0}/>
            </div>
            <div className='ava-teachers'>
                <img className='ava-img' src={imgAn} alt='фото тренера'/>
                <h2 className='ava-h2'>Анна</h2>
                <p className='ava-p'>Профессональный преподаватель йоги</p>
                <Slider data={dataAnna} maxInd={3} minInd={0} />
            </div>
        </div>
    </div>
  )
}

export default Teachers;