import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import MySearchPage from "./components/MySearchPage";
// import SportList from "./components/SportList";
// import SearchCoachPage from './components/SearchCoachPage';

class App extends Component {
  state = {}
  render() {
    return (
      <MySearchPage /> 
    //   <SportList />      
    )
  }
}
export default App;