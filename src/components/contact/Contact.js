import MyInfo from "./MyInfo";
import MeContacter from "./MeContacter";
import TitreH1 from "../TitreH1";

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

function Contact() {

  useEffect(() => {
    slideInTop("#contact");
  
  }, []);

  return (
    <div className="comp-contact" id="contact">
      {/* <div className="btnvershaut" onClick={basculerTop}>
        <img src={arrowUp} alt="fleche-haut" />
      </div> */}
      <TitreH1 texte='Contact'/>
      <div className='compartiment-contact'>
          <MyInfo />
          <MeContacter />
      </div>
    </div>
  );
}

export default Contact;
