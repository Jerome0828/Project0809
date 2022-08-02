import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../../../scss/all.css';

// 首頁輪播課程卡片
class CarouselCard extends Component {
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
            <div className="cardBox" style={this.state.cardBoxText}>
            <NavLink to={`/lesson/${this.props.lid}`}>
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
            
                    <span className='cardBoxTitle'>{this.props.title}</span>
                    </button>
                    </div>
            </NavLink>
                    
                   
            </div>
            </>
        );
    }
}
 
export default CarouselCard;