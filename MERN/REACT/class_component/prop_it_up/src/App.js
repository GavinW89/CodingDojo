import './App.css';
import React from 'react';
import Personcard from './components/personCard';

function App() {
  return (
    <div className="App">
      <Personcard name="Doe, Jane" age="45" hair="black"></Personcard>
      <Personcard name="Smith, John" age="88" hair="Brown"></Personcard>
      <Personcard name="Fillmore, Millard" age="50" hair="Brown"></Personcard>
      <Personcard name="Smith, Maria" age="62" hair="Brown"></Personcard>
    </div>
  );
}



export default App;
