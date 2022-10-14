import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meal from './components/Meals/Meal';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meal/>
      </main>
    </Fragment>
  );
}

export default App;
