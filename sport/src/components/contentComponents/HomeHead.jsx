import React, { Component } from 'react';
import '../../scss/all.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './carouselCard/carouselCard.jsx'

import leftImg from '../../img/ben01.jpg';





import rightImg from '../../img/fitness06.jpg';
import rightImg1 from '../../img/fitness06.jpg';
import rightImg2 from '../../img/ben004.jpg';
import rightImg3 from '../../img/ben003.jpg';
import rightImg4 from '../../img/ben002.jpg';
import rightImg5 from '../../img/ben001.jpg';

// // 輪播第二頁圖片
import sectionCarouselImg1 from '../../img/fitness01.jpg';
import sectionCarouselImg2 from '../../img/fitness02.jpg';
import sectionCarouselImg3 from '../../img/fitness03.jpg';
import sectionCarouselImg4 from '../../img/fitness04.jpg';
import sectionCarouselImg5 from '../../img/fitness05.jpg';

// // 輪播第三頁圖片
import sectionCarouselImg6 from '../../img/space01.jpg';
import sectionCarouselImg7 from '../../img/space02.jpg';
import sectionCarouselImg8 from '../../img/space03.jpg';
import sectionCarouselImg9 from '../../img/space04.jpg';
import sectionCarouselImg10 from '../../img/space05.jpg';

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
        },
        commodityV1:[
            {id:1,value:"這是一段標題V1",src:rightImg1},
            {id:2,value:"這是一段標題V1",src:rightImg2},
            {id:3,value:"這是一段標題V1",src:rightImg3},
            {id:4,value:"這是一段標題V1",src:rightImg4},
            {id:5,value:"這是一段標題V1",src:rightImg5},
        ],
        commodityV2:[
            {id:1,value:"這是一段標題V2",src:sectionCarouselImg1},
            {id:2,value:"這是一段標題V2",src:sectionCarouselImg2},
            {id:3,value:"這是一段標題V2",src:sectionCarouselImg3},
            {id:4,value:"這是一段標題V2",src:sectionCarouselImg4},
            {id:5,value:"這是一段標題V2",src:sectionCarouselImg5},
        ],
        commodityV3:[
            {id:1,value:"這是一段標題V3",src:sectionCarouselImg6},
            {id:2,value:"這是一段標題V3",src:sectionCarouselImg7},
            {id:3,value:"這是一段標題V3",src:sectionCarouselImg8},
            {id:4,value:"這是一段標題V3",src:sectionCarouselImg9},
            {id:5,value:"這是一段標題V3",src:sectionCarouselImg10},
        ]
    } 


    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }

    render() { 
        return (
        <div>



{/* 第一層header */}
        <header>
            {/* header第一段左邊 */}
            <div className='HomeHeadBoxStyle row' 

                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >

                <div className='col-12 col-sm-5 HomeHeadBoxLeft img-fluid' >
                    <div className='HomeHeadBoxLeftImgBox'
                    
                >
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
                                    <img src={rightImg4} alt="img" />
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

{/* 第一層section(輪播Carousel設定) */}
        <section>
            <div className='mt-6 m-5 h-100'
            data-aos="fade-up"
            >
                

                <div
                className='carouselBoxBigText container' 
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >
                    <h3>精選課程</h3>
                </div>
            

            <Carousel interval={2000} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false}>

            {/* 第一頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV3.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>

            {/* 第二頁輪播 */}
            <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV2.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>

            {/* 第三頁輪播 */}  
            <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV1.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>

            </Carousel>
            </div>

        </section>
        
{/* 第二層section(輪播Carousel設定) */}
        <section>

            {/* 第一層輪播設定 */}
            <div className='mt-6 m-5 h-100'

            data-aos="fade-up"

            >
                <div
                className='carouselBoxBigText container' 
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                >
                    <h3>優質場地</h3>
                </div>



            <Carousel interval={1500} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false}>

            {/* 第一頁輪播 */}
                <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV1.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>

            {/* 第二頁輪播 */}
            <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV2.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>              

            {/* 第三頁輪播 */}  
            <Carousel.Item className='w-100 d-flex'>
                {this.state.commodityV3.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                </Carousel.Item>
            </Carousel>
            </div>

        </section>

{/* 第三層section設定固定底圖 */}
        <section>
        <div className='threeSectionBox mt-6'>
            <div className='threeSectionBoxBottomImg h-100 w-100'>
            </div>
        </div> 
        </section>

{/* 第四層section設定樣式 */}
        <section>
            <div className='mt-6 row m-auto container'>
                <div class="card col-4 h-100 " >
                    <img src={sectionCarouselImg2} class="card-img-top" alt="..."/>
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card col-4" >
                    <img src={sectionCarouselImg3} class="card-img-top " alt="..."/>
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card col-4" >
                    <img src={sectionCarouselImg4} class="card-img-top" alt="..."/>
                    
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </section>
{/* 第五層section設定樣式 */}
        <section>
            <div className='threeSectionBox mt-6'>
                <div className='threeSectionBoxBottomImg2 h-100 w-100'>
                </div>
            </div> 
        </section>




{/* 結尾footer處 */}
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