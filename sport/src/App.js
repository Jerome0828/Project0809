import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MySearchPage from "./components/MySearchPage";
// import BeCoach from "./components/BeCoach";
// import SearchCoachPage from './components/SearchCoachPage';

class App extends Component {
  state = {}
  render() {
    return (
      <MySearchPage /> 
      // <BeCoach />      
    )
  }
}
export default App;
