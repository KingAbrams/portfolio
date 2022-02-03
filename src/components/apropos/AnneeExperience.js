import React from 'react';

function AnneeExperience({nombre, libelle}) {
  return (
    <div className="anneeExp">
        <div className='nombre'>
            {nombre}
        </div>
        <div className='libelle'>
            {libelle}
        </div>
    </div >
  );
}

export default AnneeExperience;
