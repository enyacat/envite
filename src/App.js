import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing"
import Create from './Components/Create';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/event">

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
