import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../images/logoHorizontal.png';
import { Button } from '../Buttons/Button';
import Modal from '../Modal/Modal';


const Navbar = () => {

    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);
    const [activModal, setActivModal] = useState(false);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <NavLink to='/' onClick={closeMobileMenu}>
                <img src={logo} className='logo' alt='linabell'/>
            </NavLink>
            <div className='menu-icon'  onClick={handelClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                        О нас
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/practice' className='nav-links' onClick={closeMobileMenu}>
                        Практики
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/price' className='nav-links' onClick={closeMobileMenu}>
                        Тарифы
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Контакты
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <button className={click ? 'btn-mobile active' : 'btn-mobile'} onClick={() => setActivModal(true)}>Свяжитесь со мной</button>
                   <Modal active={activModal} setActive={setActivModal}/> 
                </li>
            </ul>
            {button && <Button buttonSize='btn--outline' onClick={() => setActivModal(true)}>Свяжитесь со мной</Button>} 
        </div>
    </nav>
  )
}

export default Navbar