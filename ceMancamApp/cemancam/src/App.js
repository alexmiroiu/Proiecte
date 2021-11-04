import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Header from './components/Header';
import ModalHelper from './store/modal-helper';



const App = () => {
  const [display, setDisplay] = useState('list');
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  
  const changeToList = () => {
    setDisplay('list');
  }

  const changeToForm = () => {
    setDisplay('form');
  }

  const modalIsOn = () => {
    setModalIsDisplayed(true);
  }
  const modalIsOff = () => {
    setModalIsDisplayed(false)
  }

  let displayedContent;
  display === 'list' ? displayedContent = <FoodList /> : displayedContent = <AddFoodForm /> ;
  return (
      <ModalHelper.Provider value={{
        modalDisplayed: modalIsDisplayed,
        setModalOn: modalIsOn,
        setModalOff: modalIsOff
    }}>
      <Header renderList={changeToList} renderForm={changeToForm}/>
      {displayedContent}
      </ModalHelper.Provider>
  );
}

export default App;
