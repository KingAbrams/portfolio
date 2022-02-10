import TitreH1 from '../TitreH1';
import Carte from './Carte';
import chevron from '../../icon/chevron.svg'
import plume from '../../icon/plume.svg'
import server from '../../icon/server.svg'
// import { useEffect, useRef } from 'react';
import { useEffect } from 'react';

import {gsap, Power3} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const slideInTop =(elem, delay, duration) => {
  gsap.fromTo(
    elem,
    {
      opacity:0,
      y:50
    },
    {
      y:15,
      opacity: 1,
      ease: Power3.easeIn, delay:0.15,
      scrollTrigger :{
        trigger: elem,
        start: 'top 90%',
        // end:"bottom 100%",
        // markers:true,
        toggleActions: 'restart'
      }
    },
  );
}

function Competences() {


  useEffect(() => {
    slideInTop("#competence");
  
  }, []);

  const frontEnd = [ 
    {nom: "Html", pourcentage:"90%" },
    {nom:"Css",pourcentage:"80%"},
    {nom:"Javascript",pourcentage:"70%"},
    {nom:"React Js",pourcentage:"50%"}
  ] 
  const BackEnd = [{nom: "Node JS", pourcentage:"82%"}]
  const Designer = [{nom: "Adobe illustrator", pourcentage:"52%"}]
  
  return (
    <div className='compartiment-competences' id='competence'>
        <TitreH1 texte="Compétences"/>
        <div className='container-carte'>
          <Carte titreCarte="Frontend Developer" icon={chevron} data={frontEnd}/>
          <Carte titreCarte="Backend Developer" icon={server} data={BackEnd}/>
          <Carte titreCarte="Designer" icon={plume} data={Designer}/>
        </div>
    </div>
  );
}

export default Competences;
