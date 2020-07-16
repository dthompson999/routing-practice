import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router} from "@reach/router";
import Home from './Components/Home';
import Input from './Components/Input';
import Color from './Components/Color'


function App(props) {
  return (
    <Router>
      <Home path='/home' />
      <Input path='/:input' />
      <Color path='/:input/:bgColor/:textColor' />
    </Router>
  );
}

export default App;
