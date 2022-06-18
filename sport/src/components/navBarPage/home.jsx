import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../../scss/bootstrap.scss';
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
            <div style={this.state.topStyle}>
                <Content/>
            </div>
        );
    }
}
 
export default home;