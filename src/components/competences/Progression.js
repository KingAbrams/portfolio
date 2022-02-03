
function Progression({nom, pourcentage}) {
  return (
    <div className='skill'>
        <div className='skill-name'>
            {nom}
        </div>
        <div className='skill-bar'>
            <div className='skill-per' per={pourcentage} style={{maxWidth: `${pourcentage}`}}></div>
        </div>
    </div>
  );
}

export default Progression;
