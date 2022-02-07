
function TitreCarte({logo, intitule}) {

  if(intitule==="Designer"){
    return (
      <div className='titreCarte'>
          <div>
              <img src={logo} alt="chevron" className='logo-comp' />
          </div>
          <div>
              {intitule}
              <p>1 an</p>
          </div>
      </div>
    );
  }else{
    return (
      <div className='titreCarte'>
          <div>
              <img src={logo} alt="chevron" className='logo-comp' />
          </div>
          <div>
              {intitule}
              <p>+1 an</p>
          </div>
      </div>
    );
  }
  
}

export default TitreCarte;
