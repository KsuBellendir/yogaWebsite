import {useState} from 'react';


import {FcNext, FcPrevious} from 'react-icons/fc';
import './Slider.css'

const Slider = ({data, maxInd, minInd}) => {


    const [check, setCheck] = useState(data);
    const [index, setIndex] = useState(0);
     
    const nextIndex = () => {
        setIndex(next => next + 1)
        if(index === maxInd){
            setIndex(minInd)
        }
    }

    const prewIndex = () => {
        setIndex(prew => prew - 1)
        if(index === minInd){
            setIndex(maxInd)
        }
    }
    

  return (
    <div className = 'contain'>            
        {check.map((check, ind) => {
    const {id, image} = check;
    let position = 'nextSlide';
    if(ind === index){
     position = 'activeSlide';
    }
    if(ind === index - 1 || (index === 0 && ind === check.lenght -1)){
     position = 'lastSlide'
    }

 return (
     <article className={position} key={id}>
             <div className='wrapper'>
                 <img src={image} alt='сертификат' className='img-slider'/>
             </div>
         <button className='icon' onClick={()=>prewIndex()}><FcPrevious /></button>
         <button className='icon' onClick={()=>nextIndex()}><FcNext/></button>
     </article>
 )
})}
 </div> 
  )
}

export default Slider;