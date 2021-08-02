import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Collect from './page/collect'
import Search from './page/search'
import Detail from './page/detail'
import Login from './page/login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Collect></Collect>
          </Route>
          <Route exact path='/collect'>
            <Collect></Collect>
          </Route>
          <Route exact path='/search'>
            <Search></Search>
          </Route>
          <Route exact path='/detail'>
            <Detail></Detail>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
