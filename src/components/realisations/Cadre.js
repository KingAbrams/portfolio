import {Fragment} from 'react'

function Cadre({projet}) {
  if(projet === "gestion-materielInfo"){
    return (
      <Fragment >  
        <div className='contenu-image'>
          image
        </div>
        <div className='recapitulatif'>
            <h3>Application</h3>
            <p>Conception et réalisation d'une application de gestion de parc informatique avec notification en temps réel</p>
        </div>   
      </Fragment>
    );
  }else{
    return (
      <Fragment >  
        <div className='contenu-image'>
          image
        </div>
        <div className='recapitulatif'>
            <h3>Application</h3>
            <p>Conception et réalisation d'une application pour la gestion de menage inter-arrondissement</p>
        </div>   
      </Fragment>
    );
  }
  
}

export default Cadre;
