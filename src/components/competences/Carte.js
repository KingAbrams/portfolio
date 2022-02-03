import TitreCarte from './TitreCarte';
import ContenuCarte from './ContenuCarte';

function Carte({titreCarte, icon, data }) {

  if (titreCarte === "Frontend Developer"){
    return (
      <div className="carte-front">
          <TitreCarte logo={icon} intitule={titreCarte} />
          <ContenuCarte data={data}/>
      </div>
    );
  }else if (titreCarte === "Backend Developer"){
    return (
      <div className="carte-back">
          <TitreCarte logo={icon} intitule={titreCarte} />
          <ContenuCarte data={data}/>
      </div>
    );
  } else {
    return (
      <div className="carte-design">
          <TitreCarte logo={icon} intitule={titreCarte} />
          <ContenuCarte data={data}/>
      </div>
    );
  }
  
  
  
}

export default Carte;
