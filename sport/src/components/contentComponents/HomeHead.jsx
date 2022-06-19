import React, { Component } from 'react';
import '../../scss/all.css';
// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';

import leftImg from '../../img/ben01.jpg';

import rightImg from '../../img/fitness06.jpg';
import rightImg1 from '../../img/ben004.jpg';
import rightImg2 from '../../img/ben003.jpg';
import rightImg3 from '../../img/ben002.jpg';
class HomeHead extends Component {
    state = { 

    } 



    render() { 
        return (
            <header>
                
            <div className='HomeHeadBoxStyle row'>

                <div className='col-12 col-sm-5 HomeHeadBoxLeft'>
                    <div className='HomeHeadBoxLeftImgBox'>
                    <img src={leftImg} className="HomeHeadBoxImgStyle"alt="" />
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
                </div>

                <div className='col-12 col-sm-7 HomeHeadBoxRight'>
                    <div className='HomeHeadBoxRightImgBox'>
                        <div className='HomeHeadBoxRightText row-cols-4 ' >  
                            <div className='rightBox'>
                                <div className='rightBoxTopImg'>
                                    <img className="" src={rightImg} alt="img" /> 
                                </div>
                                <div className='rightBoxBottomText'>
                                    <h3>這是廣告標題</h3>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxBottomImg'>
                                    <img src={rightImg1} alt="img" />
                                </div>
                                <div className='rightBoxTopText'>
                                    <h3>這是廣告標題</h3>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxTopImg'>
                                    <img src={rightImg2} alt="img" />
                                </div>
                                <div className='rightBoxBottomText'>
                                    <h3>這是廣告標題</h3>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxBottomImg'>
                                  <img src={rightImg3} alt="img" />
                                </div>
                                <div className='rightBoxTopText'>
                                    <h3>這是廣告標題</h3>
                                </div>
                            </div>

                        </div>

                    </div>
             

                  
             

                    
                </div>
            </div>

            <div className='row container m-auto mt-6'>
                <div className="col-4">
                    <div class="card">
                        <img src={leftImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                        <img src={leftImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                        <img src={leftImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
            </div>

            </header>
        );
    }
}
 
export default HomeHead;