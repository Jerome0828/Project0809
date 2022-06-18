import React, { Component } from 'react';

import '../../scss/all.css';
import 'bootstrap/dist/js/bootstrap';
import Content from '../content.jsx';

class home extends Component {
    state = { 
        topStyle:{
            marginTop:'0%'
        }
    }    
    render() { 
        return (
            <div>
                <Content/>
            </div>
        );
    }
}
 
export default home;