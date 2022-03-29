import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import OnePirate from './views/OnePirate';

function App() {
  return (
    <div className="App">
      <h1>Pirate Crew</h1>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>

        <Route exact path="/create">
          <Create/>
        </Route>

        <Route exact path="/edit/:_id">
          <Edit/>
        </Route>

        <Route exact path="/view/:_id">
          <OnePirate/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
