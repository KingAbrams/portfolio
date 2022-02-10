
import './App.css';

import Header from './components/topbar/Header';
import Accueil from './components/accueil/Accueil';
import Apropos from './components/apropos/Apropos';
import Competences from './components/competences/Competences';
import Realisation from './components/realisations/Realisation';
import Contact from './components/contact/Contact';
import Footer from './components/bottombar/Footer';

import ScrollToTop from './components/ScrollToTop';



function App() {

  return (

    <div className="App">
        <div className='test'>
        <div className='premierepage'>
          <Header />
          <Accueil />
        </div>
        </div>
        <Apropos />
        <Competences />
        <Realisation />
        <Contact />
        <Footer />
        <ScrollToTop />
    </div>

  );
}

export default App;
