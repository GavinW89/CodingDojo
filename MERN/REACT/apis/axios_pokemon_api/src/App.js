import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [responseData, setResponseData] = useState([]);
  console.log(responseData)

  const fetchHandler = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response=>{setResponseData(response.data.results)})
  }
  return (
    <div className="App">
      <h1>Catch all The Pokemon Names</h1>
      <button  type="button" className ="btn btn-outline-danger btn-lg m-3" onClick={fetchHandler}>Click To Get Pokemon</button>
      {
        responseData.map((item,i)=>{
          return <div className='border border-dark rounded w-25 m-auto'><p className='fs-2 m-1' key={i}>{item.name}</p></div>
        })
      }
    </div>
  );
}

export default App;
