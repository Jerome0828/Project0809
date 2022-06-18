import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MySearchPage from "./components/MySearchPage";
// import SearchCoachPage from './components/SearchCoachPage';

class App extends Component {
  state = {}
  render() {
    return (
      <MySearchPage /> 
      // <SearchCoachPage />      
    )
  }
}
export default App;
