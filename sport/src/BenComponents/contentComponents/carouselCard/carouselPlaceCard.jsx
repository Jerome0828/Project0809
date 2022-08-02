import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../../../scss/all.css';


class CarouselPlaceCard extends Component {
    state = { 
        cardImage: {
            objectFit: 'cover',
            borderRadius: 10,
            width:'200px',
            height: '370px',
            justifyContent:'center',
            border:'1px solid black'
            },
            lid:"",
    
        }
    

    render() { 


        return (
            <>
            {/* 首頁輪播中卡片替換 */}
    
            <div className="cardBox" style={this.state.cardBoxText}>
            <NavLink to={`/site/${this.props.pid}`}>
                    <img
                    style={this.state.cardImage}
                    className="carouselImgTest card"
                    src={`data:image/jpeg;base64,${this.props.img}`}
                    alt="First slide"
                    />
                    {/* 設定cardBoxText文字標題 */}
                
                    <div className='m-auto d-flex container '>
                    <button className='cardBoxText rounded-3'
                    onClick={this.setLocalStorage}>
                        {/* 設定連接網址 */}
                    <span className=''>{this.props.title}</span>
                    </button>
                    </div>
            </NavLink>
                    
                   
            </div>
            </>
        );
    }
}
 
export default CarouselPlaceCard;