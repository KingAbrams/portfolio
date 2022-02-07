import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom'


function Button({nom , btnEnvoyer}) {

  if(nom ==="Télécharger CV"){
    return (
      <button className='btn-envoyer'>
        <BrowserRouter>
            <Link to="/CV.pdf" target="_blank" download className={`btn-btn-envoyer-pdf`}>
              <p>{nom}</p>
              <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
            </Link>
        </BrowserRouter>
      </button>
    );
  }else if (nom ==="Envoyer"){
    return (
      <button type='submit' className='btn-envoyer'>
          <div className={`btn-btn-envoyer`}>
            <p>{nom}</p>
            <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
          </div>
      </button>
    );
  }
  else{
    return (
      <button className='btn-envoyer'>
          <div className={`btn-btn-envoyer`}>
            <p>{nom}</p>
            <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
          </div>
      </button>
    );
  }
    
  
}

export default Button;
