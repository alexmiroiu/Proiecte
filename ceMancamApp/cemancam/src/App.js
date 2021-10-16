import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Header from './components/Header';



const App = () => {
  const[display, setDisplay] = useState(false);

  useEffect(() => {

  },[]);

  const changeToList = () => {
    setDisplay(true);
  }
  const changeToForm = () => {
    setDisplay(false);
  }

  let displayedContent = '';
  display ? displayedContent = <FoodList /> : displayedContent = <AddFoodForm /> ;
  return (
    <Fragment>
      <Header renderList={changeToList} renderForm={changeToForm}/>
      {displayedContent}
      {/* <FoodList />
      <AddFoodForm /> */}
    </Fragment>
  );
}

export default App;
