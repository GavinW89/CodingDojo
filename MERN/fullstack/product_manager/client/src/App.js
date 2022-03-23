import Productform from './components/productform';
import './App.css';
import Main from './views/Main';
import { Link, Route, Switch} from 'react-router-dom';
import OneProduct from './components/oneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link to="/create">Create</Link>
          <Main/>
        </Route>
        <Route exact path="/create">
          <Link to="/">Home</Link>
          <Productform/>
        </Route>
        <Route exact path="/:_id">
          <OneProduct/>
        </Route>
        <Route exact path="/:_id/edit">
          <EditProduct/>
        </Route>
    </Switch>
    </div>
  );
}

export default App;
