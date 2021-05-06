import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import About from "../../pages/About";

const Routes = () => {
  return (
    <Router>
      <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
        </Switch>
    </Router>
  );
};

export default Routes;