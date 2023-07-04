import React from 'react'
import './Practice.css';
import Card from './Card';
import hatha from '../../images/hatha.jpg';
import cri from '../../images/Крийя.jpg';
import floy from '../../images/Флоу.jpg';
import nidra  from '../../images/Нидра.jpg';
import med from '../../images/Медитация.jpg';
import preg from '../../images/preg.jpg';


const Practice = () => {
  return (
    <div className='card'>
    <h1 className='practic-h1'>Наши практики</h1>
    <h3 className='practic-h3'>Мы практикуем самые распространенные направления йоги, помогающие обрести гармонию с собой</h3>
    <div className='card-container'>
      <div className='card-wrapper'>
        <ul className='card-items'>
          <Card
            src={hatha}
            text='Самая популярная практика. Предполагает статичные позы и глубокое, медленное дыхание.
             Подходит для тех, кто предпочитает оставаться в моменте и полностью прочувствовать силу своего тела.'
            label='Хатха йога'
            path='/practice'
          />
          <Card
            src={cri}
            text='Практика очищения и наполнения энергией. Включает в себя 
            повторяющиеся движения, напрямую связанные с дыханием. Практика для тех, кто готов открывать 
            новые возможности своего тела и грани сознания.'
            label='Крийя йога'
            path='/practice'
          />
        </ul>
        <ul className='card-items'>
          <Card
            src={floy}
            text='Подвид хатха йоги.
             Отличается динамичными переходами из одной позы в другую следуя за своим дыханием. 
             Подходит для тех, кто предпочитает всегда оставаться в движении.'
            label='Виньяса (флоу) йога'
            path='/practice'
          />
          <Card
            src={nidra}
            text='Расслабляющая йога. Вся практика проходит лежа, в темноте и можно даже под одеялом. 
            Подходит для тех, кто хочет отдохнуть и набраться сил.'
            label='Нидра йога'
            path='/practice'
          />
        </ul>
        <ul className='card-items'>
          <Card
            src={med}
            text='Практика подходящая под множество различных запросов: расслабление, восстановление сил,
             созерцание, понимание и принятие себя, помощь в достижении целей и т.д. 
             Практика подходит для тех, кто хочет стать лучшей версией себя.'
            label='Медитация'
            path='/practice'
          />
          <Card
            src={preg}
            text='Щадящая форма йоги.
             Сочетает в себе мягкие растяжки, дыхательные техники и расслабление, 
             чтобы помочь подготовить тело и разум к родам или восстановиться после них.'
            label='Йога для беременных и восстановление после родов'
            path='/practice'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Practice