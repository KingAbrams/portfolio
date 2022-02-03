import React from 'react';


function Button({nom , btnEnvoyer}) {
    return (
      <button className='btn-envoyer'>
          <div className={`btn-btn-envoyer`}>
            <p>{nom}</p>
            <img src={btnEnvoyer} className='img-btn' alt="boutonEnvoyer" />
          </div>
      </button>
    );
  
}

export default Button;
