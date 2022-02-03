import MyInfo from "./MyInfo";
import MeContacter from "./MeContacter";
import TitreH1 from "../TitreH1";

function Contact() {
  return (
    <div className="comp-contact">
      <TitreH1 texte='Realisation'/>
      <div className='compartiment-contact'>
          <MyInfo />
          <MeContacter />
      </div>
    </div>
  );
}

export default Contact;
