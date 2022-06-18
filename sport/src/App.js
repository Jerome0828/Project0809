import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import MySearchPage from "./components/MySearchPage";
import Citys from './components/Citys';

class App extends Component {
  state = {}
  render() {
    return (
      // <MySearchPage />       
      <Citys />
    )
  }
}
export default App;
