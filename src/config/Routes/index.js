import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import About from "../../pages/About";
import CRUD from "../../pages/CRUD";
import NavBar from "../../components/molecules/Navbar";
import Registrasi from "../../pages/Registrasi";




const Routes = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>
            <Route path="/CRUD">
               <CRUD/>
             </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/Registrasi">
                <Registrasi></Registrasi>
            </Route>
           
        </Switch>
    </Router>
  );
};

export default Routes;