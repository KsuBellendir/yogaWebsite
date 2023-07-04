import {useState} from 'react';
import './Price.css';
import Modal from '../../components/Modal/Modal';

const PriceItem = ({label, comment, price}) => {
  const [activModal, setActivModal] = useState(false);




  return (
    <div className='price-item-box'>
        <h5 className='info-item'>{label}</h5>
        <p className='comm-item'>{comment}</p>
        <h2 className='price-info-item'>{price} руб</h2>
        <button className='btn-price' onClick={() => setActivModal(true)}> Купить</button>
        <Modal active={activModal} setActive={setActivModal}/> 
    </div>
  )
}

export default PriceItem;