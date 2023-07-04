import React from 'react';
import './Price.css'
import PriceItem from './PriceItem';

const Price = () => {
  return (
    <div className='price-container'>
      <div className='price-info'>
        <h1 className="price-h1">Выберите тариф</h1>
        <p className="price-p">Мы предоставляем гибкую систему оплаты занятий.</p>
        <p className="price-p">Длительность одного занятия составляет от 30 до 90 минут</p>
      </div>
      <div className='price-wraper'>
        <h6 className='price-h6'>Занятия по 30 минут</h6>
        <ul className='price-items'>
          <PriceItem label='Одно занятие'
            comment='Для всех видов практик'
            price='700'/>
          <PriceItem label='Абонемент на 8 занятий'
            comment='Для всех видов практик'
            price='4800'/>
          <PriceItem label='Безлимитный месяц'
            comment='Неограниченное количество занятий в месяц'
            price='11500'/>
        </ul>
        <h6 className='price-h6'>Занятия по 60 минут</h6>
        <ul className='price-items'>
          <PriceItem label='Одно занятие'
            comment='Для всех видов практик'
            price='1200'/>
          <PriceItem label='Абонемент на 8 занятий'
            comment='Для всех видов практик'
            price='8600'/>
          <PriceItem label='Безлимитный месяц'
            comment='Неограниченное количество занятий в месяц'
            price='15000'/>
        </ul>
        <h6 className='price-h6'>Занятия по 90 минут</h6>
        <ul className='price-items'>
          <PriceItem label='Одно занятие'
            comment='Для всех видов практик'
            price='1500'/>
          <PriceItem label='Абонемент на 8 занятий'
            comment='Для всех видов практик'
            price='10600'/>
          <PriceItem label='Безлимитный месяц'
            comment='Неограниченное количество занятий в месяц'
            price='19000'/>
        </ul>
      </div>
    </div>
  )
}

export default Price;