import React, {useEffect, useState} from 'react';
import arrowUp from '../icon/up-arrow.png'
// import { classNames } from './classNames';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{

        if (window.pageYOffset > 600){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    const scrollToTop =() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
    
      return () => {
        window.removeEventListener('scroll', toggleVisibility);;
      };
    }, []);
    

    return (
        <div onClick={scrollToTop} className={isVisible ? 'btnvershautOn' : 'btnvershautOff'}>
            <img src={arrowUp} alt="fleche-haut" className='arrowUp' />
        </div>
    );
}

export default ScrollToTop;
