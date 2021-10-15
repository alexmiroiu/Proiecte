import React from 'react';
import { Fragment } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';



const App = () => {



  return (
    <Fragment>
      <h1>hello</h1>
      <FoodList />
      <AddFoodForm></AddFoodForm>
    </Fragment>
  );
}

export default App;
