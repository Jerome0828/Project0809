import React, { Component } from 'react';
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