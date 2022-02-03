import React from 'react';

function ContenuInfo({data}) {
    const donnees = data
  return (
    <>
        {donnees.map( (donnee) => (
            <div key={donnee.label} className={`iconEtContenu-${donnee.label}`}>
                <img className={`icon-${donnee.label}`} src={donnee.icone} alt="phone" />
                <div className="phone-contenu">
                    <span className='titre-label'>{donnee.label}</span> <br/>
                    <span className='contenu-label'>{donnee.contenu}</span>
                </div>
            </div>
        ) )}
    </>
    );
}

export default ContenuInfo;
