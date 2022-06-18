import React, { Component } from 'react';
import '../../scss/all.css';
// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';

import leftImg from '../../img/ben01.jpg';

import rightImg0 from '../../img/fitness03.jpg';
import rightImg1 from '../../img/fitness05.jpg';
import rightImg2 from '../../img/space01.jpg';
import rightImg3 from '../../img/space04.jpg';
class HomeHead extends Component {
    state = { 

    } 



    render() { 
        return (
            <header>
                
            <div className='HomeHeadBoxStyle row'>

                <div className='col-md-12 col-xl-5 HomeHeadBoxLeft'>

                    <img src={leftImg} className="HomeHeadBoxImgStyle h-100 "alt="" />
                        <div className='HomeHeadBoxText'>
                            <div className="text-center" >
                                <h1 className='rounded-top'>這是一段標題</h1>
                                <p className='rounded-bottom'>這是一段介紹</p>
                                <div className="btnRegister rounded-bottom">
                                    <NavLink className="nav-link" to="/loginRegister" exact >加入會員</NavLink>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='row col-md-12 col-xl HomeHeadBoxRight'>
                
                        <div className='col-md-3 col-sm-6 bg-test'>
                            <img className="img-fluid" src={rightImg0} alt="" />
                        </div>
                        <div className='col-md-3 col-sm-6 bg-test1 '>321</div>
                        <div className='col-md-3 col-sm-6 bg-test'><img src={rightImg1} alt="" />123</div>
                        <div className='col-md-3 col-sm-6 bg-test1 '>321</div>
    
                        <div className='col-md-3 col-sm-6 bg-test1'>123</div>
                        <div className='col-md-3 col-sm-6 bg-test '><img src={rightImg2} alt="" /></div>
                        <div className='col-md-3 col-sm-6 bg-test1'>123</div>
                        <div className='col-md-3 col-sm-6 bg-test '><img src={rightImg3} alt="" />321</div>

             

                    
                </div>
            </div>
            <div className='HomeHeadBoxStyle row mx-auto'>

                <div className="test">
                    <h1><a href="#"></a></h1>
                    <ul><a href="#"></a></ul>
                </div>                
                    
                <div className='btn btn-test'>下邊內容</div>
                    <div className='text-test'>右邊內容</div>
                    <div className='bg-test'>右邊內容</div>
                    <div className='btn btn-test1 mt-md-6'>右邊內容</div>
                    <div className='text-test1'>右邊內容</div>
                    <div className='bg-test1'>右邊內容</div>
            </div>
            </header>
        );
    }
}
 
export default HomeHead;