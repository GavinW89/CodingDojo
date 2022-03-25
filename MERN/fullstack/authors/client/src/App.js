import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Edit from './views/Edit';
import Main from './views/Main';

function App() {

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/create">
          <Create/>
        </Route>

        <Route exact path="/edit/:_id">
          <Edit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
