import React from 'react';
import {NavLink} from 'react-router-dom';
import './Practice.css'

const Card = (props) => {
  return (
    <>
    <li className='card-item'>
      <NavLink className='card-item-link' to={props.path}>
        <figure className='card-item-pic-wrap'>
          <img
            className='card-item-img'
            alt='Фото практики'
            src={props.src}
          />
        </figure>
        <div className='card-item-info'>
          <h3 className='card-item-label'>{props.label}</h3>
          <h5 className='card-item-text'>{props.text}</h5>
        </div>
      </NavLink>
    </li>
  </>
  )
}

export default Card