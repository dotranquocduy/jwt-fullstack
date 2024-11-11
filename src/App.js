import "./App.scss";
import Nav from "./components/Navigation/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App-container">
        {/* <Nav /> */}
        <Switch>
           <Route path="/user">
            User
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/contact">
            Contact
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
