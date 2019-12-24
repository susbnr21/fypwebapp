import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import LayOut from './components/LayOut';
import { Route, Link } from 'react-router-dom';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LayOut/>
      <Route exact path= "/" component = {Home} />
      <Route exact path= "/login" component = {Login} />
      <Route exact path= "/register" component = {Register} />
      <Route exact path= "/about" component = {About} />
      <Route exact path= "/contact" component = {Contact} />
    </div>
  );
}

export default App;
