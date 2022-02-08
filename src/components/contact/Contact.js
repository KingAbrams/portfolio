import MyInfo from "./MyInfo";
import MeContacter from "./MeContacter";
import TitreH1 from "../TitreH1";
import arrowUp from '../../icon/up-arrow.png'

function Contact() {

  function basculerTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

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
