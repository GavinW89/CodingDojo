import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import SingleJob from './views/SingleJob';

function App() {
  return (
    <div className="App">
      <h1>Job Board</h1>

      <Switch>

        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/jobs/create">
          <Create/>
        </Route>

        <Route exact path="/jobs/:_id">
          <SingleJob/>
        </Route>

        <Route exact path="/jobs/:_id/update">
          <Update/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
