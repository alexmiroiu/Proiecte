import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import MobileHeader from './components/MobileHeader';

import FoodList from './pages/FoodList';
import classes from './App.module.css';

function App() {


    return <Fragment>
      <MobileHeader />
      <Routes>
        <Route path='/' element={<FoodList />} />
      </Routes>
    </Fragment>

}

export default App;
