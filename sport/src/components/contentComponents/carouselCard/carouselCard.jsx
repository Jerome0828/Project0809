import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/all.css';


class CarouselCard extends Component {
    state = { 
        cardImage: {
            objectFit: 'cover',
            borderRadius: 10,
            width:'200px',
            height: '370px',
            justifyContent:'center',
            border:'1px solid black'
            }
        }
     
    render() { 
        return (
            <>
            <div className="cardBox" style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className="carouselImgTest card"
                    src={this.props.src}
                    alt="First slide"
                    />
                    <button className='cardBoxText rounded-3'>
                    <span className='d-block'><NavLink to="/coursesAndVenues">{this.props.value}</NavLink></span>
                    </button>
            </div>
            </>
        );
    }
}
 
export default CarouselCard;