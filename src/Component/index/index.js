

import React, {Component} from 'react';
import Home from './../Home/index'; 
import About from './../About/index';
import Contct from './../Contact/index';
import Footer from './../Footer/index';
import Navbar from './../Navbar/index';
import Portfolio from './../Portfolio/index';
import Profile  from './../Profile/index';
import Socialmedia from './../SocialMedia/index';
import Work from './../Work/index';


class Index extends Component {
  render(){
    return (
      <div className="App">

        <Home></Home>
        <Work></Work>
        <Portfolio></Portfolio>

        <Profile></Profile>
        <About></About>
        <Socialmedia></Socialmedia>
        <Footer></Footer>      
      </div>
    )
  }
  
}

export default Index;
