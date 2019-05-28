import React, { useState } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const [total, updatedTotal] = useState(0);

  const clearReset = () => {
    updatedTotal(0); 
  }

  const calculate = (calc) => {
    return new Function(`return ${calc}`)();
  }

  const displayedValue = (event) => {
    let inputValue = event.target.textContent;

    if(total === 0) {
      return updatedTotal(inputValue);
    }

    if(inputValue === '÷') {
      return updatedTotal(total + '/');
    } 

    if(inputValue === 'x') {
      return updatedTotal(total + '*')
    }

    if(inputValue === '=') {
      return updatedTotal(calculate(total));
    }

    return updatedTotal(total + inputValue);
  }

  return (
    <div className="calculator">
      <CalculatorDisplay tot={total}/>
      <div className="btn-wrapper">
        <ActionButton clicked={clearReset} content="clear"/>
        <NumberButton clicked={displayedValue} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="÷"/>
        {[9, 8, 7].map(num => <NumberButton key={num} clicked={displayedValue} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={displayedValue} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="x"/>
        {[6, 5, 4].map(num => <NumberButton key={num} clicked={displayedValue} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={displayedValue} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="-"/>
        {[3, 2, 1].map(num => <NumberButton key={num} clicked={displayedValue} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={displayedValue} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="+"/>
        <ActionButton clicked={displayedValue} btnStyle="num-btn" content="0" bold="bold"/>
        <NumberButton clicked={displayedValue} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="="/>
      </div>
    </div>
  );
};

export default App;
