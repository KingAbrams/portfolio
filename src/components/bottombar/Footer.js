import React from 'react';
import fb from '../../icon/facebook (2).png'
import insta from '../../icon/instagram (2).png'
import twitter from '../../icon/twitter (2).png'

function Footer() {
  return (
    <div className='compartiment-footer'>
        <div className='logo-reseau'>
          <div className='logoAndContenu'>
            <img src={fb} className='logo-ic' alt="facebook" />
            <p><a href="https://www.facebook.com/HannaelAbrams" target="_blank" rel="noopener noreferrer">Hannael abrams</a> </p>
          </div>
        
          <div className='logoAndContenu'>
            <img src={insta} className='logo-ic' alt="instagram" />
            <p><a href="https://www.instagram.com/hannaelabrams" target="_blank" rel="noopener noreferrer">@hannaelabrams</a></p>
          </div>

          <div className='logoAndContenu'>
            <img src={twitter} className='logo-ic' alt="twitter" />
            <p> <a href="https://twitter.com/ProNatHannael" target="_blank" rel="noopener noreferrer">@ProNathanael</a> </p>
          </div>
        </div>

        <div className='copyright'>
        © 2022 - Hannael Abrams - tous droits réservés
        </div>
    </div>
  );
}

export default Footer;
