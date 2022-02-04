import React from 'react';
import lune from '../../icon/lune.svg'
import main from '../../icon/poignee-de-main.gif'
import bavarder from '../../icon/bavarder.png'
import avatar from '../../icon/avatar.png'
import skills from '../../icon/skills.png'
import user from '../../icon/user.png'
import monitor from '../../icon/monitor.png'

function Header() {
  return (
        <div>
          <nav>
          <div className='logo'>Hannael Abrams</div>
          <ul>
              <li>
                <div className='titreico'>Accueil</div>
                <div>
                <img src={avatar} alt="main" className='logo-ico' />
                </div>
              </li>

              <li>
                <div className='titreico'>A propos</div>
                <div>
                  <img src={user} alt="main" className='logo-ico' />
                </div>
              </li>

              <li>
                <div className='titreico'>Compétences</div>
                <div>
                  <img src={skills} alt="main" className='logo-ico' />
                </div>
              </li>

              <li>
                <div className='titreico'>Réalisation</div>
                <div>
                  <img src={monitor} alt="main" className='logo-ico' />
                </div>
              </li>

              <li>
                <div className='titreico'>Contacter</div>
                <div>
                  <img src={bavarder} alt="main" className='logo-ico' />
                </div>
                </li>

              <li><img src={lune} alt='lune' className='logo-lune' /></li>
          </ul>
        </nav>
        </div>
  );
}

export default Header;
