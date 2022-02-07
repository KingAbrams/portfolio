import React from 'react';
import lune from '../../icon/lune.svg'
// import main from '../../icon/poignee-de-main.gif'
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
                <div className='titreico'><a href="#apropos">A propos</a></div>
                <div>
                  <a href="#apropos"><img src={user} alt="main" className='logo-ico' /></a>
                </div>
              </li>

              <li>
                <div className='titreico'><a href="#competence">Compétences</a></div>
                <div>
                  <a href="#competence"><img src={skills} alt="main" className='logo-ico' /></a>
                </div>
              </li>

              <li>
                <div className='titreico'><a href="#realisation">Réalisation</a></div>
                <div>
                  <a href="#realisation"><img src={monitor} alt="main" className='logo-ico' /></a>
                </div>
              </li>

              <li>
                <div className='titreico'><a href="#contact">Contacter</a></div>
                <div>
                  <a href="#contact"><img src={bavarder} alt="main" className='logo-ico' /></a>
                </div>
                </li>

              <li><img src={lune} alt='lune' className='logo-lune' /></li>
          </ul>
        </nav>
        </div>
  );
}

export default Header;
