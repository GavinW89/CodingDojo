import React, {useState} from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("");
  const [box,setBox] = useState([

  ])

  const boxPosition = {
    display:'flex'
  }

  const createBox = (e) => {
    e.preventDefault();
    setBox([...box,color])
    setColor("");
  }

  return (
    <div className="App">
      <div>
          <form onSubmit={ (e) =>createBox(e) }>
              <div>
                  <label htmlFor="color">Color:  </label>
                  <input type="text" name="color" value={color} onChange={(e)=>{setColor(e.target.value);}}/>
                  <input type="submit" value="Add" />
              </div>
          </form>
      </div>
      <div style = {boxPosition}>
      {
        box.map((color,i)=>{
          return <div key={i} style= {{backgroundColor: color, height: 50, width: 50}}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
