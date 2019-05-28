import React, { useState } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const [total, setTotal] = useState(0);

  const clickEventHandler = (event) => {
    if(event.target.textContent === 'clear'){
      setTotal(0);
    } else {
      setTotal(`${event.target.textContent}`)
    }
  }

  return (
    <div className="calculator">
      <CalculatorDisplay tot={total}/>
      <div className="btn-wrapper">
        <ActionButton clicked={clickEventHandler} content="clear"/>
        <NumberButton clicked={clickEventHandler} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="÷"/>
        {[9, 8, 7].map(num => <NumberButton key={num} clicked={clickEventHandler} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={clickEventHandler} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="*"/>
        {[6, 5, 4].map(num => <NumberButton key={num} clicked={clickEventHandler} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={clickEventHandler} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="-"/>
        {[3, 2, 1].map(num => <NumberButton key={num} clicked={clickEventHandler} btnStyle="num-btn" content={num}/>)}
        <NumberButton clicked={clickEventHandler} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="+"/>
        <ActionButton clicked={clickEventHandler} btnStyle="num-btn" content="0" bold="bold"/>
        <NumberButton clicked={clickEventHandler} btnStyle="calc-btn" bgColor="#A0001E" color="#fff" content="="/>
      </div>
    </div>
  );
};

export default App;
