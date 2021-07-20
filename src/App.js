import Test from './page/test'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/test'>
            <Test></Test>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
