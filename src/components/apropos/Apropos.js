import React from 'react';
import TitreH1 from '../TitreH1';
import AnneeExperience from './AnneeExperience';
import Button from '../Button';
import btntelecharger from '../../icon/telecharger.svg'



// import Lottie from 'react-lottie';
// import animationData from '../../lotties/kiss-of-the-heart.json';

function Apropos() {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };


  return (
    <div className='image-arriere'>
      <div className='compartiment-apropos' id='apropos'>
          <TitreH1 texte='A propos de moi' />
          <div className='ca-contenu'>
            <p className='phraseApropos'>Jeune étudiant venant de Tamatave, je suis actuellement en Master 1 à 
            l'Ecole Nationale d'Informatique de Fianarantsoa suivant le parcours "Génie Logiciel et base de données".<br/> 
            Attiré par le développement web, je ne cesse d'aiguiser mes compétences pour rendre 
            l'expérience utilisateur la plus satisfaisante possible lors de son interaction avec mes sites ou applications.
            </p>
            <div className='experience'>
              <AnneeExperience nombre="01+" libelle="Année d'experience" />
              <AnneeExperience nombre="03+" libelle="Projets fini" />
              <AnneeExperience nombre="01+" libelle="Clients satisfaits" />
            </div>
            <Button nom="Télécharger CV" btnEnvoyer={btntelecharger}/>
            
          </div>

        <div>
        {/* <Lottie 
          options={defaultOptions}
            height={400}
            width={400}
          /> */}
        </div>

    </div>
    </div>
  );
}

export default Apropos;
