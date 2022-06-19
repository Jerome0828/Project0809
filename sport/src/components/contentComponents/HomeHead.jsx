import React, { Component } from 'react';
import '../../scss/all.css';
// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import leftImg from '../../img/ben01.jpg';

import rightImg from '../../img/fitness06.jpg';
import rightImg1 from '../../img/ben004.jpg';
import rightImg2 from '../../img/ben003.jpg';
import rightImg3 from '../../img/ben002.jpg';

// 輪播第二頁圖片
import sectionCarouselImg from '../../img/fitness01.jpg';
import sectionCarouselImg1 from '../../img/fitness02.jpg';
import sectionCarouselImg2 from '../../img/fitness03.jpg';
import sectionCarouselImg3 from '../../img/fitness04.jpg';
import sectionCarouselImg4 from '../../img/fitness05.jpg';

// 輪播第三頁圖片
import sectionCarouselImg5 from '../../img/space01.jpg';
import sectionCarouselImg6 from '../../img/space02.jpg';
import sectionCarouselImg7 from '../../img/space03.jpg';
import sectionCarouselImg8 from '../../img/space04.jpg';
import sectionCarouselImg9 from '../../img/space05.jpg';

class HomeHead extends Component {
    state = { 
        cardImage: {
            objectFit: 'cover',
            borderRadius: 10,
            width:'200px',
            height: '370px',
            justifyContent:'center',
            border:'1px solid black'
        },
        cardBoxText:{
            alignItems: 'center',
            justifyContent: 'center'
        },
        borderRadiusStyle:{
            borderRadius: 10
        }
    } 



    render() { 
        return (
        <div>



        {/* 第一層header */}
        <header>
            {/* header第一段左邊 */}
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

            {/* header第一段右邊 */}
                <div className='col-12 col-sm-7 HomeHeadBoxRight'>
                    <div className='HomeHeadBoxRightImgBox'>
                        <div className='HomeHeadBoxRightText row-cols-4 ' >  
                            <div className='rightBox'>
                                <div className='rightBoxTopImg'>
                                    <img className="" src={rightImg} alt="img" /> 
                                </div>
                                <div className='rightBoxBottomText'>
                                        <NavLink to="/coursesAndVenues"><h3>這是廣告標題</h3></NavLink>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxBottomImg'>
                                    <img src={rightImg1} alt="img" />
                                </div>
                                <div className='rightBoxTopText'>
                                     <NavLink to="/coursesAndVenues"><h3>這是廣告標題</h3></NavLink>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxTopImg'>
                                    <img src={rightImg2} alt="img" />
                                </div>
                                <div className='rightBoxBottomText'>
                                     <NavLink to="/coursesAndVenues"><h3>這是廣告標題</h3></NavLink>
                                </div>
                            </div>
                            <div className='rightBox'>
                                <div className='rightBoxBottomImg'>
                                  <img src={rightImg3} alt="img" />
                                </div>
                                <div className='rightBoxTopText'>
                                     <NavLink to="/coursesAndVenues"><h3>這是廣告標題</h3></NavLink>
                                </div>
                            </div>

                        </div>

                    </div>     
                </div>
            </div>
        </header>


        <section>
            {/* 第一層section */}
            <div className='mt-6 m-5 h-100'>
    
            <Carousel interval={2000} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false}>

            {/* 第一頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg}
                    alt="First slide"
                    />
                        <button className='cardBoxText rounded-3'>
                        <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                        </button>
                    </div>
                   
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg1}
                    alt="First slide"
                    />
                      <button className='cardBoxText rounded-3'>
                        <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                        </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg2}
                    alt="First slide"
                    />
                      <button className='cardBoxText rounded-3'>
                        <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                        </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg3}
                    alt="First slide"
                    />
                      <button className='cardBoxText rounded-3'>
                        <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                        </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg1}
                    alt="First slide"
                    />
                      <button className='cardBoxText rounded-3'>
                        <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                        </button>
                    </div>


                </Carousel.Item>

            {/* 第二頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>
                    
                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg1}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg2}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg3}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg4}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>


                </Carousel.Item>

            {/* 第三頁輪播 */}  
                <Carousel.Item className='w-100 d-flex'>
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg5}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>
                   
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg6}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg7}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg8}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg9}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>


                </Carousel.Item>

            </Carousel>
            </div>

        </section>
        
        {/* 第二層section */}
        <section className="">
            <div className='mt-6 twoSectionBackgroundImg' >
            <div className='mt-6 m-5 h-100'>
    
            <Carousel interval={1500} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false} className="">

            {/* 第一頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>
                   
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg1}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg2}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg3}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={rightImg1}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>


                </Carousel.Item>

            {/* 第二頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>
                    
                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg1}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg2}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg3}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>

                        <div className=' cardBox' style={this.state.cardBoxText}>
                        <img
                        style={this.state.cardImage}
                        className=" carouselImgTest card"
                        src={sectionCarouselImg4}
                        alt="First slide"
                        />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                        </div>


                </Carousel.Item>

            {/* 第三頁輪播 */}  
                <Carousel.Item className='w-100 d-flex'>
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg5}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>
                   
                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg6}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg7}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg8}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>

                    <div className=' cardBox' style={this.state.cardBoxText}>
                    <img
                    style={this.state.cardImage}
                    className=" carouselImgTest card"
                    src={sectionCarouselImg9}
                    alt="First slide"
                    />
                            <button className='cardBoxText rounded-3'>
                            <span className='d-block'><NavLink to="/coursesAndVenues">這是廣告標題</NavLink></span>
                            </button>
                    </div>


                </Carousel.Item>

            </Carousel>
            </div>
            </div>


            {/* 第三層section */}
            <div className='row container m-auto sectionBox1 mt-6'>
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


            </section>





        <footer className='mt-6'>
            <div>
                頁尾籌備中
            </div>

        </footer>


        </div>
        );
    }
}
 
export default HomeHead;