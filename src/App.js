//import logo from './logo.svg';
 // import './App.css';
 import React from 'react'; 
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./pages/Login"
import NavBar from "./components/molecules/Navbar"
import About from './pages/About';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router>
      <NavBar></NavBar>
        <div>
          <Switch>              
            <Route path="/Dashboard">
               <Dashboard />
             </Route>
             <Route exact path="/">
               <Login />
             </Route>
             <Route exact path="/About">
               <About />
            </Route>    
                
            </Switch>
        </div>
    </Router>
    
  );
}

export default App;


