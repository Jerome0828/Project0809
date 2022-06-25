import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Card from './Card';

class Footer extends Component {
    state = { activeIndex : 0 } 

    handleSelect = (selectedIndex, e) => {
        this.setState({index: selectedIndex})
    };

    render() { 
        return (
            <div className='container mt-3'>
                <div className='row mx-4 '>
                    <p id='title' className='container'>關聯課程</p>
                    <div className='row justify-content-center'>
                        <Card /><Card /><Card />
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Footer;