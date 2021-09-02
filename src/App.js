import React from "react";
import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Location from './Location/Location';
import Category from './Category/Category';
function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <div>
          <Switch>
            <Route path="/Category">
              <Category />
            </Route>
            <Route path="/Location">
              <Location />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
