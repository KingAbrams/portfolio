import React from 'react';
import Button from '../Button';
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';


function PartieTexte() {

  const txtAnim = document.querySelector('h1.loopword');
        
        // new Typewriter(txtAnim, {
        //     autoStart : true,
        //     deleteSpeed: 20
        // })

        // .changeDelay(50)
        // .typeString("Hey, moi c'est Hannael")
        // .pauseFor(2000)
        // // .typeString('<strong>, Mande izio ah</strong>')
        // // .pauseFor(1000)
        // .deleteChars(7)
        // .typeString('Abrams')
        // .pauseFor(2000)
        // .deleteChars(6)
        // .start()

  return (
    <div className="accueil-left">
      <h1 className='loopword'>Hey, moi c'est Hannael</h1>
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
