import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import MobileHeader from './components/MobileHeader';

import FoodList from './pages/FoodList';
import classes from './App.module.css';
import AddFoodForm from './pages/AddFoodForm';
import FoodItemPage from './pages/FoodItemPage';

function App() {


    return <Fragment>
      <MobileHeader />
      <Routes>
        <Route path='/' element={<Navigate replace to="/food-items" />} />
        <Route path='/food-items' element={<FoodList />} />
        <Route path='/food-items/:id' element={<FoodItemPage />} />
        <Route path='/add-recipe' element={<AddFoodForm />} />
      </Routes>
    </Fragment>

}

export default App;
