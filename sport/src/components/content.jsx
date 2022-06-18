import React, { Component } from 'react';
import '../scss/all.css';

import 'bootstrap/dist/js/bootstrap';
import HomeHead from './contentComponents/HomeHead.jsx'
class Content extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <HomeHead/>
            </>
        );
    }
}
 
export default Content;