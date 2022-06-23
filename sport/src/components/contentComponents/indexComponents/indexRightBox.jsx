import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/all.css';

class IndexRightBox extends Component {
    state = { 
     } 
    render() { 
        return (
            <div className='rightBox'>
            <div className={this.props.imgAlign}>
                <img className="" src={this.props.src} alt="img" /> 
            </div>
            <div className={this.props.textAlign} >
                <div className='rightBoxBottomTextV1'>
                    <NavLink to={this.props.to}><h1>{this.props.value}</h1></NavLink>
                </div>
            </div>
        </div>
        );
    }
}
 
export default IndexRightBox;