import { useState, useRef, useEffect } from 'react';

import classes from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileHeader from './components/MobileHeader';
import Modal from './components/Modal';
import Projects from './components/Projects';
import GlobalState from './store/store';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [format, setFormat] = useState();
  const [formatMsg, setFormatMsg] = useState();
  const [modalOn, setModal] = useState(false);
  const [lang, setLang] = useState('ro');


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if(width > 768 || height > 800) {
      setFormat('Desktop')
    } 
    if(width < 769 || height < 801) {
      setFormat('Mobile')
    }
  },[width, height]);

  useEffect(() => {
    if(format === 'Desktop') {
      setFormatMsg('Proiectul nu este disponibil in varianta desktop, acceseaza acest proiect pe telefonul mobil.')
    } else if(format === 'Mobile') {
      setFormatMsg('Acest proiect nu este disponibil pe telefonul mobil.')
    }
  },[format])


  useEffect(() => {
    if(!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', 'off');
    } else if(localStorage.getItem('darkMode')) {
      const storedValue = localStorage.getItem('darkMode');
      if(storedValue === 'off') {
        setDarkMode(false);
      } else if(storedValue === 'on') {
        setDarkMode(true);
      }
    }
    if(!localStorage.getItem('language')) {
      localStorage.setItem('language', 'ro');
    } else if (localStorage.getItem('language')) {
      const storedLanguage = localStorage.getItem('language');
      if(storedLanguage === 'ro') {
        setLang('ro');
      } else if(storedLanguage === 'eng') {
        setLang('eng');
      }
    }
  },[])


  const toggleTheme = () => {
    const storedValue = localStorage.getItem('darkMode');
    if(storedValue === 'off') {
      localStorage.setItem('darkMode', 'on');
    } else if(storedValue === 'on') {
      localStorage.setItem('darkMode', 'off');
    }
    setDarkMode(previousState => !previousState);
  }

  const toggleLanguage = () => {
    if(lang === 'ro') {
      setLang('eng');
      localStorage.setItem('language', 'eng')
    }
    if(lang === 'eng') {
      setLang('ro');
      localStorage.setItem('language', 'ro')
    }
  }

  console.log(lang)

  const modalStatusHandler = () => {
    setModal(previousState => !previousState)
  }

  const heroComponentRef = useRef();
  const aboutComponentRef = useRef();
  const projectsComponentRef = useRef();
  const contactComponentRef = useRef();

  const navigateToHero = () => {
    heroComponentRef.current.goToHero();
  }
  const navigateToAbout = () => {
    aboutComponentRef.current.goToAbout();
  }
  const navigateToProjects = () => {
    projectsComponentRef.current.goToProjects();
  }
  const navigateToContact = () => {
    contactComponentRef.current.goToContact();
  }

  return(<GlobalState.Provider value={{
    darkMode: darkMode,
    changeTheme: toggleTheme,
    format: format,
    formatMessage: formatMsg,
    modalIsActive: modalOn,
    changeModalState: modalStatusHandler,
    currentLanguage: lang,
    changeLanguage: toggleLanguage
  }}>
    <main className={`${classes.main} ${darkMode ? classes.dark : ''} ${modalOn ? classes.modalOpen : ''}`}>
      {(width > 799) && <Header logoClick={navigateToHero} aboutClick={navigateToAbout} projectsClick={navigateToProjects} contactClick={navigateToContact}/>}
      {(width < 800) && <MobileHeader logoClick={navigateToHero} aboutClick={navigateToAbout} projectsClick={navigateToProjects} contactClick={navigateToContact}/>}
      {modalOn && <Modal />}
      <div className={`${classes.outerWrapper} `}>
      <Hero ref={heroComponentRef}/>
      <About ref={aboutComponentRef}/>
      <Projects ref={projectsComponentRef}/>
      <Contact ref={contactComponentRef}/>
      <Footer />

      </div>
    </main>
  </GlobalState.Provider>
  );
}

export default App;
