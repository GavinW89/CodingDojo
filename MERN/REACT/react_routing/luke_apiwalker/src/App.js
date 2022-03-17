import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Starwars from './views/starwars';

function App() {
  const [option, setOption] = useState("people");
  const [id, setId] = useState("");

  const history = useHistory();
  
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    history.push(`/${option}/${id}`)
  }

  return (
    <div className="App">
      <h1>Get Your Star Wars Fandom Here</h1>
      <form onSubmit={onSubmitHandler}>
        <select onChange={(event) => setOption(event.target.value)} name='option'>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
          <input type="number" name='id' onChange={(event) =>setId(event.target.value)}/>
        <input type="submit" value="FIND" />
      </form>
      <Switch>
      <Route exact path="/">
          <h1>Welcome Star Wars Fans</h1>
        </Route>
        <Route exact path="/:option/:id">
          <Starwars/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
