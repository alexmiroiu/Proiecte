import React, { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import Header from './components/Header';
import ModalHelper from './store/modal-helper';



const App = () => {
  const [display, setDisplay] = useState('list');
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  
  const changeToList = () => {
    setDisplay('list');
    setTimeout(() => {
      setMenuIsDisplayed(false);

    }, 150)
  }

  const changeToForm = () => {
    setDisplay('form');
    setTimeout(() => {
      setMenuIsDisplayed(false);

    }, 150)
  }

  const modalIsOn = () => {
    setModalIsDisplayed(true);
  }
  const modalIsOff = () => {
    setModalIsDisplayed(false)
  }

  const setMenuStatus = (event) => {
    setMenuIsDisplayed(event.target.checked);
  }

  let displayedContent;
  display === 'list' ? displayedContent = <FoodList /> : displayedContent = <AddFoodForm /> ;
  return (
      <ModalHelper.Provider value={{
        modalDisplayed: modalIsDisplayed,
        setModalOn: modalIsOn,
        setModalOff: modalIsOff
    }}>
      <Header renderList={changeToList} renderForm={changeToForm} menuStatus={setMenuStatus} menuIsDisplayed={menuIsDisplayed}/>
      {displayedContent}
      </ModalHelper.Provider>
  );
}

export default App;
