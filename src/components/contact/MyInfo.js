import phone from '../../icon/phone.svg'
import mail from '../../icon/mail.svg'
import localisation from '../../icon/localisation.svg'
import ContenuInfo from './ContenuInfo';

function MyInfo() {

    const donnees = [
        {icone: phone, label:'Téléphone', contenu:'+261 32 93 699 68'},
        {icone: mail, label:'Email', contenu:'hannaelabrams@gmail.com'},
        {icone: localisation, label:'Adresse', 
        contenu:"Résidence des Ingenieurs - Tanambao\n301 - Fianarantsoa\nMadagascar "}
    ]

  return (
    <div className="MyInfo">
        <ContenuInfo data={donnees} />   
    </div>
  );
}

export default MyInfo;
