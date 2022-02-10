import React from 'react';
import Button from '../Button';
import boutonEnvoyer from '../../icon/bouton-envoyer.svg';

import { useEffect} from 'react';

import {gsap} from 'gsap'

const slideInTop =() => {

  gsap.fromTo(
    '.loopword',
    {
      opacity:0,
      y:-30
    },
    {
      opacity : 1,
      y: 0,
    }
  )

  gsap.fromTo(
    '.specialite',
    {
      opacity:0,
      x:-10
    },
    {
      opacity : 1,
      x: 0,
      delay: 0.1,
      stagger: 0.05
    }, 0.3
  )
  
}


function PartieTexte() {

  useEffect(() => {
    slideInTop();
  
  }, []);

  // const txtAnim = document.querySelector('h1.loopword');
        
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
      <h4>
        <span className='specialite'>D</span>
        <span className='specialite'>é</span>
        <span className='specialite'>v</span>
        <span className='specialite'>e</span>
        <span className='specialite'>l</span>
        <span className='specialite'>o</span>
        <span className='specialite'>p</span>
        <span className='specialite'>p</span>
        <span className='specialite'>e</span>
        <span className='specialite'>u</span>
        <span className='specialite'>r</span>
        <span> </span>
        <span className='specialite'>F</span>
        <span className='specialite'>u</span>
        <span className='specialite'>l</span>
        <span className='specialite'>l</span>
        <span className='specialite'>s</span>
        <span className='specialite'>t</span>
        <span className='specialite'>a</span>
        <span className='specialite'>c</span>
        <span className='specialite'>k</span>
      </h4>

        {/* Développeur Fullstack</h4> */}
      <p className='introAccueil'><span className='niveau'>Jeune étudiant</span> passionné par le développement Web,
        Jeune étudiant passionné par le développement Web,
        Jeune étudiant passionné par le développement Web
      </p>
      <Button nom="Contactez-moi" btnEnvoyer={boutonEnvoyer} />
    </div>
  );
}

export default PartieTexte;
