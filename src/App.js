//import logo from './logo.svg';
 // import './App.css';
 import React from 'react'; 
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./pages/Login"
import NavBar from "./components/molecules/Navbar"
import About from './pages/About';

import CRUD from './pages/CRUD';
import Routes from './config/Routes';



function App() {
  return (
    <Routes></Routes>
    
  );
}

export default App;


