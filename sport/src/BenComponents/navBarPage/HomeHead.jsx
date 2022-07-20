import React, { Component } from 'react';
import '../../scss/all.css';

import 'aos/dist/aos.css';
import AOS from 'aos';
import Axios from 'axios';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

// 輪播課程卡片
import CarouselCard from '../contentComponents/carouselCard/carouselCard.jsx'

// 7/18 BEN 新增輪播場地卡片 
import CarouselPlaceCard from '../contentComponents/carouselCard/carouselPlaceCard.jsx'

import leftImg from '../../imgs/ben01.jpg';


import IndexRightBox from '../contentComponents/indexComponents/indexRightBox.jsx';
import IndexLeftBox from '../contentComponents/indexComponents/indexLeftBox.jsx';

import rightImg from '../../imgs/fitness06.jpg';
import rightImg1 from '../../imgs/fitness06.jpg';
import rightImg2 from '../../imgs/ben004.jpg';
import rightImg3 from '../../imgs/ben003.jpg';
import rightImg4 from '../../imgs/ben002.jpg';
import rightImg5 from '../../imgs/ben001.jpg';

// // 輪播第二頁圖片
import sectionCarouselImg1 from '../../imgs/fitness01.jpg';
import sectionCarouselImg2 from '../../imgs/fitness02.jpg';
import sectionCarouselImg3 from '../../imgs/fitness03.jpg';
import sectionCarouselImg4 from '../../imgs/fitness04.jpg';
import sectionCarouselImg5 from '../../imgs/fitness05.jpg';

// // 輪播第三頁圖片
import sectionCarouselImg6 from '../../imgs/space01.jpg';
import sectionCarouselImg7 from '../../imgs/space02.jpg';
import sectionCarouselImg8 from '../../imgs/space03.jpg';
import sectionCarouselImg9 from '../../imgs/space04.jpg';
import sectionCarouselImg10 from '../../imgs/space05.jpg';

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
            {id:1,value:"健身房包場租借",src:rightImg1,to:"/lesson"},
            {id:2,value:"TrainwithRoy 1on1",src:rightImg2,to:"/lesson"},
            {id:3,value:"一對一重訓課程",src:rightImg3,to:"/lesson"},
            {id:4,value:"重量訓練、徒手訓練",src:rightImg4,to:"/lesson"},
            {id:5,value:"棒球專項肌力及體能訓練",src:rightImg5,to:"/lesson"},
        ],
        commodityV2:[
            {id:1,value:"新手入門瘦身指南",src:sectionCarouselImg1,to:"/lesson"},
            {id:2,value:"TrainwithRoy 1on1",src:sectionCarouselImg2,to:"/lesson"},
            {id:3,value:"一對一重訓課程",src:sectionCarouselImg3,to:"/lesson"},
            {id:4,value:"重量訓練、徒手訓練",src:sectionCarouselImg4,to:"/lesson"},
            {id:5,value:"棒球專項肌力及體能訓練",src:sectionCarouselImg5,to:"/lesson"},
        ],
        commodityV3:[
            {id:1,value:"健身達人運動工廠",src:sectionCarouselImg6,to:"/lesson"},
            {id:2,value:"忠•初我健身教室",src:sectionCarouselImg7,to:"/lesson"},
            {id:3,value:"好時良身｜自在（個案室）",src:sectionCarouselImg8,to:"/lesson"},
            {id:4,value:"Camp訓練營地",src:sectionCarouselImg9,to:"/lesson"},
            {id:5,value:"中力健身中心東英館",src:sectionCarouselImg10,to:"/lesson"},
        ],

        // header 左側區塊設定
        oneLeftBoxStyle:[
            {id:1,title:"開啟你的運動旅程",value:"彈指間找到附近的課程、教練、訓練空間",BottomText:"立即加入",src1:leftImg,to:"/login"},
        ],
        // header 右側區塊設定
        oneRightBoxStyle:[
            {id:1,value:"多功能訓練",value1:"一對一課程",src:rightImg,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/lesson"},
            {id:2,value:"基礎重量訓練",value1:"團體課程",src:rightImg4,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/lesson"},
            {id:3,value:"間歇訓練",value1:"團體課程",src:rightImg2,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/lesson"},
            {id:4,value:"基礎瑜珈",value1:"皮拉提斯",src:rightImg3,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/lesson"},
        ],
        lessonData:[],
        placeData:[],
        lessonV1:[],
        lessonV2:[],
        lessonV3:[],
        placeV1:[],
    } 

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 2000
        });
      }
              
    async componentDidMount() {
        // 取得課程lesson
        var url = `http://localhost:80/spost/BenPHP/lessonGet.php`;
        var result = await Axios.get(url);
        this.state.lessonData = [];
        let dateLesson = [];
        Object.keys(result.data).map( (values)=> {
            dateLesson.push(result.data[values])
            if ( dateLesson.length == 5 ) {
                this.state.lessonData.push(dateLesson)
                dateLesson = []
            }
        })
        // this.state.lessonData = result.data;
        // console.log(this.state.lessonData)


        // 各取5筆資料
        // this.state.lessonV1 = this.state.lessonData.filter((value,index)=>{
        //     return index < 5;
        // })
        // console.log(this.state.lessonV1)
        
        // this.state.lessonV2 = this.state.lessonData.filter((value,index)=> index  < 5)
        // console.log(this.state.lessonV2)

        // this.state.lessonV3 = this.state.lessonData.filter((value,index)=>{
        //     return index < 5;
        // })
        // console.log(this.state.lessonV3)

    
        
    
        // 取得場地place
        var url = `http://localhost:80/spost/BenPHP/placeGet.php`;
        var result = await Axios.get(url);
        this.state.placeData = [];
        let datePlace = [];
        Object.keys(result.data).map( (values)=> {
            datePlace.push(result.data[values])
            if ( datePlace.length == 5 ) {
                this.state.placeData.push(datePlace)
                datePlace = []
            }
        })
        // this.state.placeData = result.data;
        // console.log(this.state.placeData)

        // 取得場地5筆
        // this.state.placeV1 = this.state.placeData.filter((value,index)=>{
        //     return index <15;
        // })
        // console.log(this.state.placeV1)

        this.setState({});

        // var url1 = `http://localhost/spost/DongPHP/sportType.php`;
        // var result1 = await Axios.get(url1);
        // this.state.sportType = result1.data;
        // let sportType = this.state.sportType;
        // sportType.map((elm,idx)=>{
        //     elm.className = 'text-black';
        //     elm.chkicon = faTimes;
        //     elm.id = `type${idx}`;
        // })
        // this.setState({});
    }

        // 點選連結
        cardOnClick=(e)=>{
            // let mypid = Location.href;
            
            // console.log(this.props.match.params.id);
            // await Axios.post("http://localhost/spost/DongPHP/singleLesson.php", )
            // .then( (response) => {
            //     resdata = response.data;
            // });
        }


    render() {
        return (
        <div>
{/* 第一層header */}
        <header className=''>
            {/* header第一段左邊 */}
            <div className='HomeHeadBoxStyle row m-auto'                                                             

                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                {this.state.oneLeftBoxStyle.map((e,index)=>{return <IndexLeftBox 
                        id={e.id} key={index} title={e.title} value={e.value} src={e.src1}
                        to={e.to} BottomText={e.BottomText}
                        
                />  })}
                {/* 
                {this.state.data.map((elm,index)=>{
                    return  <IndexLeftBox  id={elm.pid} title={elm.title}/>
                })} */}
                

            {/* header第一段右邊圖片牆 */}
                <div className='col-12 col-sm-7 HomeHeadBoxRight'>
                    <div className='HomeHeadBoxRightImgBox'>
                        <div className='HomeHeadBoxRightText row-cols-4 ' >  
                        {this.state.oneRightBoxStyle.map((e,index)=>{return <IndexRightBox 
                        
                        id={e.id} key={index} 
                        value={e.value} 
                        value1={e.value1}
                        src={e.src}
                        imgAlign={e.imgAlign}  
                        textAlign={e.TextAlign}
                        to={e.to
                        }/>  })}
                        </div>

                    </div>     
                </div>
            </div>
        </header>
        
{/* 第一層section(設定滿版標語) */}
            <section>
                <div className='oneSectionBox' 
                
                >
                    <div className='row container m-auto'>
                        <div className='col-3 oneSectionBoxCol'

                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"

                        >
                        <h1 className='container text-center mt-4 text-white'>30,000+</h1>
                        <h4 className='container text-center text-white'>運動愛好者</h4>
                            <div className='oneSectionBoxButton'>
                            <NavLink to="/login" className="container btn bg-white w-50 mt-3" activeStyle={{color:'red'}}>
                                立即加入
                            </NavLink>
                            </div>
                        </div>

                        <div className='col-3 oneSectionBoxCol'
                        
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        
                        >
                        <h1 className='container text-center mt-4 text-white'>1000+</h1>
                        <h4 className='container text-center text-white'>專業教練老師</h4>
                            <div className='oneSectionBoxButton'>
                            <NavLink to="/lesson" className="container btn bg-white w-50 mt-3">
                                前往探索
                            </NavLink>
                            </div>
                        </div>

                        <div className='col-3 oneSectionBoxCol'
                        
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        
                        >
                        <h1 className='container text-center mt-4 text-white'>1,600+</h1>
                        <h4 className='container text-center text-white'>實體/線上課程</h4>
                            <div className='oneSectionBoxButton'>
                            <NavLink to="/lesson" className="container btn bg-white w-50 mt-3">
                                前往探索
                            </NavLink>
                            </div>
                        </div>

                        <div className='col-3 oneSectionBoxCol'
                        
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        
                        >
                        <h1 className='container text-center mt-4 text-white'>100+</h1>
                        <h4 className='container text-center text-white'>運動訓練空間</h4>
                            <div className='oneSectionBoxButton'>
                            <NavLink to="/site" className="container btn bg-white w-50 mt-3">
                                前往探索    
                            </NavLink>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

{/* 第二層section(輪播Carousel設定) 課程頁面*/}
        <section>
            <div className='mt-6 m-5 h-100'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
                

                <div
                className='carouselBoxBigText container mb-3' 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"

                >
                    <h1>全台超過1000位專業教練</h1>
                    <a>健身、重訓、瑜珈、有氧、皮拉提斯、舞蹈都有</a>
                </div>
            

            <Carousel interval={2000} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false} className="mt-5 container m-auto">

            {/* 0719 Jerome //////////////////////////// */}
            {this.state.lessonData.map( (value) => {
                return (
                    <Carousel.Item className='w-100 d-flex'>
                        {value.map( (values, index) => {
                            return (
                                <CarouselCard 
                                    key={index}
                                    lid={values.lid} 
                                    title={values.title} 
                                    img={values.img} />  
                            )
                        })}
                    </Carousel.Item>
                )
            })}
            



            {/* 第一頁輪播 */}
                {/* <Carousel.Item className='w-100 d-flex'>
                    {<CarouselCard cardOnClick={(e)=>this.cardOnClick(e)} lessonDate={this.state.data}/>}
                {this.state.lessonData.map((e,index,array)=>{return <CarouselCard data-lid={e.lid} dataList={array} lid={e.lid} key={index} title={e.title} img={e.img} />  
                })}
                {this.state.lessonData.map((e,index)=>{return <CarouselCard  id={e.id} key={index} value={e.value} src={e.src} />  })}
                <CarouselCard data={this.state.lessonData}/>
                </Carousel.Item> */}

            {/* 第二頁輪播 */}
            {/* <Carousel.Item className='w-100 d-flex'>
            {this.state.lessonData.map((e,index,array)=>{return <CarouselCard dataList={e.array} lid={e.lid} key={index} title={e.title} img={e.img} />  
                })}
                </Carousel.Item> */}

            {/* 第三頁輪播 */}  
            {/* <Carousel.Item className='w-100 d-flex'>
            {this.state.lessonData.map((e,index,array)=>{return <CarouselCard dataList={e.array} lid={e.lid} key={index} title={e.title} img={e.img} />  
                })}
                </Carousel.Item> */}

            </Carousel>


            <div
                className='carouselBoxBottomText container' 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                
                >   
                    <div className='carouselBoxBottomTextV1 mt-3'>
                        <div className='carouselBoxBottomTextV1Right'>
                        <NavLink to="/coursesAndVenues">

                        <a className='carouselBoxBottomTextV2'>探索更多教練
                        <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        </a>

                        </NavLink>
                        </div>
                    </div>
            </div>

        
            </div>
        </section>
        
{/* 第三層section(輪播Carousel設定) 場地頁面 */}
        <section>
            <div className=' m-5 h-100 row-sm-12'
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
            >
                

                <div
                className='carouselBoxBigText container mb-3' 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"

                >
                    <h1>各類運動訓練空間</h1>
                    <a>室內運動、室內健身、戶外運動、戶外健身</a>
                </div>
            

            <Carousel interval={2000} indicators={false} nextLabel={false} prevLabel={false} fade
            pause={'hover'} slide={true} touch={true} controls={false} className="mt-5 container m-auto">
            
            {/* 0720 Jerome /////////////////// */}
            {this.state.placeData.map( (value) => {
                return (
                    <Carousel.Item className='w-100 d-flex'>
                        {value.map( (values, index) => {
                            return (
                                <CarouselPlaceCard 
                                    key={index}
                                    pid={values.pid}
                                    title={values.title} 
                                    img={values.img} />
                            )
                        })}
                    </Carousel.Item>
                )
            })}

            {/* 第一頁輪播 */}
            {/* <Carousel.Item className='w-100 d-flex '>
            {this.state.placeData.map((value,index,array)=>{
                return  <CarouselPlaceCard id={value.id} pid={value.pid} key={index} title={value.title} img={value.img} /> 
                })}
            </Carousel.Item> */}
                
            {/* 第二頁輪播 */}  
                {/* <Carousel.Item className='w-100 d-flex'>
                {this.state.placeData.map((value,index)=>{return  <CarouselPlaceCard id={value.id} pid={value.pid} key={index} title={value.title} img={value.img} />
                 })}
                </Carousel.Item> */}


            {/* 第三頁輪播 */}
                {/* <Carousel.Item className='w-100 d-flex'>
                {this.state.placeV1.map((e,index)=>{return <CarouselPlaceCard  id={e.id} pid={e.pid} key={index} title={e.title} img={e.img} /> 
                 })}
                </Carousel.Item> */}
            </Carousel>


            <div
                className='carouselBoxBottomText cont container' 
                data-aos="fade-up"

                >   
                    <div className='carouselBoxBottomTextV1 mt-3'>
                        <div className='carouselBoxBottomTextV1Right'>
                        <NavLink to="/coursesAndVenues">

                        <a className='carouselBoxBottomTextV2'>探索更多場地
                        <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                        </a>

                        </NavLink>
                        </div>
                    </div>
            </div>

        
            </div>
        </section>
        
{/* 第三層section設定固定底圖 */}
        <section className='mt-6 mb-5'>
        <div className='threeSectionBox mt-6'>
            <div className='threeSectionBoxBottomImg h-100 w-100'>
                <div>
                </div>
            </div>
        </div> 
        </section>


{/* 第四層section設定固定底圖 */}
        <section>
            <div className='bg-test h-100 w-100 container mt-6'>
                <div className='fourthSectionBox d-flex row m-auto'>
                    <div className='col-sm-3 fourthSectionBoxCol'>123</div>
                    <div className='col-sm-8 fourthSectionBoxColText'>123</div>

                    <div className='col-sm-8 fourthSectionBoxCol'>123</div>
                    <div className='col-sm-3 fourthSectionBoxColText'>123</div>
                    
                    


                </div>

            </div>
        </section>


{/* 第五層section設定固定底圖 */}
        <section>
        <div className='bg-test h-25 w-100 mt-6'>
                <div className='fifthSectionBox'>
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