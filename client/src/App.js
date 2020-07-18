import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/protected" component={BubblePage} />
          </Switch>
      </div>
  );
}

export default App;
