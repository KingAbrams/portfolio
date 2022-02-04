
import './App.css';

import Header from './components/topbar/Header';
import Accueil from './components/accueil/Accueil';
import Apropos from './components/apropos/Apropos';
import Competences from './components/competences/Competences';
import Realisation from './components/realisations/Realisation';
import Contact from './components/contact/Contact';
import Footer from './components/bottombar/Footer';



function App() {

  return (

    <div className="App">
        <Header />
        <Accueil />
        <Apropos />
        <Competences />
        <Realisation />
        <Contact />
        <Footer />
        
    </div>

  );
}

export default App;
