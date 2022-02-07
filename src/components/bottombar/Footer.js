import React  from 'react';
import fb from '../../icon/facebook (2).png'
import insta from '../../icon/instagram (2).png'
import twitter from '../../icon/twitter (2).png'


function Footer() {

  return (
    <div className='compartiment-footer'>
        
        <div className='logo-reseau'>
          <div >      
            <a className='logoAndContenu' href='https://www.facebook.com/HannaelAbrams' target="_blank" rel="noopener noreferrer">
              <img src={fb} className='logo-ic' alt="facebook" />
              <p>Hannael abrams </p>
            </a>
          </div>
        
          <div >
            <a className='logoAndContenu' href='https://www.instagram.com/hannaelabrams' target="_blank" rel="noopener noreferrer">
              <img src={insta} className='logo-ic' alt="instagram" />
              <p>@hannaelabrams</p>
            </a>
          </div>

          <div >
            <a className='logoAndContenu' href='https://twitter.com/ProNatHannael' target="_blank" rel="noopener noreferrer">
              <img src={twitter} className='logo-ic' alt="twitter" />
              <p> @ProNathanael </p>
            </a>

          </div>
        </div>

        <div className='copyright'>
        © 2022 - Hannael Abrams - tous droits réservés
        </div>
    </div>
  );
}

export default Footer;
