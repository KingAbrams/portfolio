import TitreH1 from "../TitreH1";
import Cadre from "./Cadre";

function Realisation() {

  return (

    <div className='compartiment-realisations'>
          <TitreH1 texte='Realisation'/>
          <div className="cadre">
            <Cadre />
          </div>
    </div>
  );
}

export default Realisation;
