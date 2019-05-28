import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ButtonsContainer />
    </div>
  );
};

export default App;
