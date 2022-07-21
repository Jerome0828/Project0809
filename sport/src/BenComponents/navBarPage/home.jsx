import React, { Component } from 'react';

import '../../scss/all.css';
import 'bootstrap/dist/js/bootstrap';
import HomeHead from './HomeHead.jsx';

class home extends Component {
    state = { 
        topStyle:{
            marginTop:'0%'
        }
    }
    componentDidMount(){
        // window.location.reload();
    }
    render() { 
        return (
            <div>
                <HomeHead/>
            </div>
        );
    }
}
 
export default home;