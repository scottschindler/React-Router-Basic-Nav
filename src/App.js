import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div>
    <Router>

    <Route exact path ="/" component = {Home}/>
    <Route path ="/about" component = {About}/>
    <Route path ="/contact" component = {Contact}/>
    <Navigation />
    </Router>
  </div>
);

export default App;


// Create 3 <Route /> setting their path prop equal to /, /about, /contact with their respective components.