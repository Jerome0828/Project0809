import React, { Component } from 'react';
<<<<<<< HEAD
import './scss/all.scss';
import NavBarOK from './BenComponents/navBarOK.jsx';
// import NavBarContent from './BenComponents/navBarContent.jsx';
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
=======
// import Course from './JeromeCom/course/course.jsx';
// import Venues from './JeromeCom/venues/venues.jsx';
import Login from './JeromeCom/login/login';

class App extends Component {
    // state = {  } 
    render() { 
        return (
            // <Venues />
            // <Course />
            <Login />
        );
    }
}
 
export default App;

>>>>>>> 71a63d91627af4e2c9e10ea58f3b0b86faed4428
