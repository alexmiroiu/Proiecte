import React, {Fragment} from 'react';
import classes from './App.module.css';
import Generate from './components/generate';
import Options from './components/options';
import Password from './components/password';
import Strength from './components/strength';

function App() {
  return <div className={classes.mainWrapper}>
            <h1>Password Generator</h1>
            <Password />
            <Strength />
            <Options />
            <Generate />
          </div>

        
}

export default App;
