import React, { useState, useEffect } from 'react'
import styles from "./app.module.css";
import AppHeader from "../appHeader/appHeader.jsx";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import { gettingApiItems } from "../../utils/api";


function App() {
  const [dataState, setDataState] = useState({ isLoading: false, error: false, data: [] });

  const [modalIngredient, setModalIngredient] = useState({ isOpen: false, data: {} });
  const [modalOrder, setModalOrder] = useState({ isOpen: false })

  const getDataIngredients = async () => {
  setDataState({ ...dataState, isLoading: true, error: false });
  try {
    const ingredients = await gettingApiItems();
    setDataState({ ...dataState, isLoading: false, error: false, data: ingredients.data });
  } catch (error) {
    setDataState({ ...dataState, isLoading: false, error: true });
    console.log(error);
  }
}
console.log(dataState.data)
  useEffect(() => {
    getDataIngredients()
  }, [])
  const closeModalIngredient = () => {
    setModalIngredient({ isOpen: false, data: {} })
  }
  const closeModalOrder = () => {
    setModalOrder({ isOpen: false })
  }
  const openModalIngredient = (ingredientData) => {
    setModalIngredient({ isOpen: true, data: { ...ingredientData } })
  }
  const openModalOrder = () => {
    setModalOrder({ isOpen: true })
  }
  const { isLoading, error, data } = dataState;
  return (
    <div className={styles.app}>
      <AppHeader />
      {isLoading && "Загрузка..."}
      {error && "Ошибка :("}
      {
        !isLoading &&
        !error &&
        data.length &&
        <main className={`${styles.main}`}>
          <BurgerIngredients data={data} openModal={openModalIngredient} closeModal={closeModalIngredient} modalState={modalIngredient} />
          <BurgerConstructor data={data} openModal={openModalOrder} closeModal={closeModalOrder} modalState={modalOrder} />
        </main>
      }
    </div>
  );
}

export default App;
