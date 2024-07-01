import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact/index';
import Navbar from './Component/Navbar/index';

import Index from './Component/index/index'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route  path="/" element={<Index></Index>}></Route>
          <Route  path ='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
}

export default App;
