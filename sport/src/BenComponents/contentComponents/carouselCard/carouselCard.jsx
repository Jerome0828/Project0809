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


    setLocalStorage =(e)=>{
        
        // console.log(this.props.value);
        // console.log(this.props.value);
// calStorage.setItem("Test",JSON.stringify(this.state.commodity));            
// localStorage.setItem("Test",JSON.stringify(this.props.date));
    }


    render() { 
        let lessonDate =this.props.lessonDate;
        // console.log(lessonDate);
        return (
            <>
            {/* 首頁輪播中卡片替換 */}

            <div className="cardBox" style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className="carouselImgTest card"
                    src={this.props.src}
                    alt="First slide"
                    />
                    {/* 設定cardBoxText文字標題 */}
                    <button className='cardBoxText rounded-3'
                    onClick={this.setLocalStorage}>
                        {/* 設定連接網址 */}
                    {/* <span className='d-block'><NavLink to="/coursesAndVenues">{this.lessonDate}</NavLink></span> */}
                    <span className='d-block'><NavLink to="/coursesAndVenues">{this.props.value}</NavLink></span>
                    </button>
            </div>
            </>
        );
    }
}
 
export default CarouselCard;