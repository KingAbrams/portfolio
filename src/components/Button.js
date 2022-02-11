import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect} from 'react';

import {gsap} from 'gsap'

const slideInBottom =() => {

  gsap.fromTo(
    '.slideBottom',
    {
      opacity:0,
      y:30
    },
    {
      opacity : 1,
      y: 0,
    }, 1
  )
}


function Button({nom , btnEnvoyer, notif}) {
  useEffect(() => {
    slideInBottom();
  
  }, []);

  const notifyCv = () => toast.info("CV téléchargé!");

  if(nom ==="Télécharger CV"){
    return (
      <>
      <button className='btn-envoyer' onClick={notifyCv}>
        <BrowserRouter>
            <Link to="/CV.pdf" target="_blank" download className={`btn-btn-envoyer-pdf`}>
              <p>{nom}</p>
              <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
            </Link>
        </BrowserRouter>
      </button>
      <ToastContainer />
      </>
    );
  }else if (nom ==="Envoyer"){
    return (
      <>
      <button type='submit' className='btn-envoyer'>
          <div className={`btn-btn-envoyer`}>
            <p>{nom}</p>
            <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
          </div>
      </button>
      </>
    );
  }
  else{
    return (
      <a href="#contact" >
        <button className='btn-envoyer slideBottom'>
            <div className={`btn-btn-envoyer`}>
              <p>{nom}</p>
              <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
            </div>
        </button>
        
      </a>
    );
  }
    
  
}

export default Button;
