import React from 'react';
import lune from '../../icon/lune.svg'

function Header() {
  return (
        <div>
          <nav>
          <div className='logo'>Hannael Abrams</div>
          <ul>
              <li>Accueil</li>
              <li>A propos</li>
              <li>Compétences</li>
              <li>Réalisation</li>
              <li>Contact</li>
              <li><img src={lune} alt='lune' className='logo-lune' /></li>
          </ul>
        </nav>
        </div>
  );
}

export default Header;
