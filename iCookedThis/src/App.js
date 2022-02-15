import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import MobileHeader from './components/MobileHeader';

import FoodList from './pages/FoodList';
import classes from './App.module.css';
import AddFoodForm from './pages/AddFoodForm';

function App() {


    return <Fragment>
      <MobileHeader />
      <Routes>
        <Route path='/' element={<FoodList />} />
        <Route path='/add-recipe' element={<AddFoodForm />} />
      </Routes>
    </Fragment>

}

export default App;
