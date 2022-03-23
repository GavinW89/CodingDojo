import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import SingleJob from './views/SingleJob';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Hellooooooo</h1>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/jobs/create">
            <Create/>
          </Route>

          <Route exact path="/oneJob/:_id">
            <SingleJob/>
          </Route>

          <Route exact path ="/jobs/:_id/update">
            <Update/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
