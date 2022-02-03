import Progression from './Progression';

function ContenuCarte({data}) {

  const donnees = data;

  return (
    
    <div>
        {donnees.map( (donnee) => (
          <Progression key={donnee.nom} nom={donnee.nom} pourcentage={donnee.pourcentage}/>
        ) 
      )}

    </div>
  );
  
}

export default ContenuCarte;
