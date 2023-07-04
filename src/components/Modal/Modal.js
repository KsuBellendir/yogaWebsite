import {useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './Modal.css';

const Modal = ({active, setActive}) => {
    const {register, formState: { errors }} = useForm();

    const sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_3p3aw2a', 'template_x8ifqfd', e.target, 'VUNcD2wQlRVrgfSVE')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <form className={active ? 'modal-content active' : 'modal-content'} onSubmit={sendEmail} onClick={e => e.stopPropagation()}>
        <input className='titel-input' {...register('firstname', {required: true, minLength:3})} placeholder='Имя'/>
        {errors.firstname && errors.firstname.type === 'minLength' && <p>Обязательное поле для заполнения </p> }
        <input className='titel-input' {...register('phone', {required: true, minLength:3})} placeholder='Телефон'></input>
        {errors.surname && errors.surname.type === 'minLength' && <p>Обязательное поле для заполнения </p> }
        <input className='titel-input' {...register('email', {required: true, minLength:3})} placeholder='Email'></input>
        {errors.spec && errors.spec.type === 'minLength' && <p>Обязательное поле для заполнения </p> }
        <button className='btn-input' onClick={() => setActive(false)}>Oтправить</button>
      </form>
    </div>
  )
}

export default Modal;