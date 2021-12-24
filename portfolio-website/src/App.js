import classes from './App.module.css';
import About from './components/About';
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

    </div>
  </main>
}

export default App;
