import React from 'react';
import PartieTexte from './PartieTexte';
import PartiePhoto from './PartiePhoto';

import wave from '../../image/wave.svg'


function Accueil() {
  return (
    <>
      <div className='compartiment-accueil'>
          <PartieTexte />
          <PartiePhoto />
          
      </div>
      <div>
        <img src={wave} alt="waves" className='fond-curvy'/>
      </div>
      
      
    </>
  );
}

export default Accueil;
