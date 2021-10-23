import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import styles from './App.module.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Header from './components/Header';



const App = () => {
  const[display, setDisplay] = useState('list');

  useEffect(() => {

  },[]);

  const changeToList = () => {
    setDisplay('list');
  }
  const changeToForm = () => {
    setDisplay('form');
  }

  let displayedContent;
  display === 'list' ? displayedContent = <FoodList /> : displayedContent = <AddFoodForm /> ;
  return (
    <Fragment>
      <Header renderList={changeToList} renderForm={changeToForm}/>

      {displayedContent}

    </Fragment>
  );
}

export default App;
