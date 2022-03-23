import Productform from './components/productform';
import './App.css';
import Main from './views/Main';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
    </Switch>
    </div>
  );
}

export default App;
