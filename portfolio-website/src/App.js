import classes from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';


function App() {
  return <main className={classes.main}>
    <Header />
    <div className={classes.outerWrapper}>
    <Hero />
    <About />
    <Projects />
    <Contact />

    </div>
  </main>
}

export default App;
