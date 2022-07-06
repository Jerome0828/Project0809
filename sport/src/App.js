import React, { Component } from 'react';
<<<<<<< HEAD
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MySearchPage from "./components/MySearchPage";
import BeCoach from "./components/BeCoach";
import RentPlace from "./components/RentPlace";
import SearchCoachPage from './components/SearchCoachPage';
import SearchSitePage from './components/SearchSitePage';

class App extends Component {
  state = {}
  render() {
    return (
      // <MySearchPage /> 

      <BrowserRouter>
        <Switch>
          <Route path="/" component={BeCoach} exact></Route>
          <Route path="/rent" component={RentPlace}></Route>
          <Route path="/coach" component={SearchCoachPage}></Route>
          <Route path="/site" component={SearchSitePage}></Route>
        </Switch>
      </BrowserRouter>

    )
  }
}
export default App;
=======
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
>>>>>>> b64177d0da9ba42680a5273853b55aadf9e24306
