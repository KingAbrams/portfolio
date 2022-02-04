import React from 'react';
import Button from '../Button';
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';


function PartieTexte() {
  return (
    <div className="accueil-left">
      <h1>Hey, moi c'est Hannael</h1>
      <h4>Développeur Fullstack</h4>
      <p className='introAccueil'>Jeune étudiant passionné par le developpement Web,
        Jeune étudiant passionné par le developpement Web,
        Jeune étudiant passionné par le developpement Web
      </p>
      <Button nom="Contactez-moi" btnEnvoyer={boutonEnvoyer} />
    </div>
  );
}

export default PartieTexte;
