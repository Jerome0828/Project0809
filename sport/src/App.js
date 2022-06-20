import React, { Component } from 'react';
import './scss/all.scss';
import NavBarOK from './components/navBarOK.jsx';
// import NavBarContent from './components/navBarContent.jsx';
import {HashRouter} from 'react-router-dom'

class App extends Component {
    state = { 
  
     } 
    render() { 
      return (
        <HashRouter>
          <NavBarOK/>
        </HashRouter>
      );
    }
  }
   
  export default App;