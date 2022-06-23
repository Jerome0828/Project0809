import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Teachers from '../teachers';
import Card from '../Card';
import Carousels from './c_carousels';
import Evaluation from '../Evaluation';
import './course.css';

class Course extends Component {
    state = {  activeIndex : 0 } ;

    handleSelect = (selectedIndex, e) => {
        this.setState({index: selectedIndex})
    };

    render() { 
        return (
            <div id="box">
                <div className='col-lg-10' id='a' ></div>
                <div className='row justify-content-center '>
                    <h1 className='col-lg-5 mt-5 mb-4 text-right'>肌地台 自由教練場地租借</h1>
                </div>
                <div className='row h-100 mb-0' ref={this.abc}>
                    <div className='col-lg-9 b-0'>
                        <div className='w-75' >
                            <div id='v' className='' style={{width: '80vw', height: '30vh'}}>
                                <Carousels />
                            </div>
                        </div>
                    </div>
                    <div className='tbox container-fluid col-lg-3 w-25 m-0'>
                        <div className='row justify-content-center'>
                            <div className='tit col-lg-8'>
                                <img src="https://dummyimage.com/1000/000/fff" 
                                    className='img-fluid mx-3 mb-3 rounded-circle col-7'/><br />
                                <p className='text-center bg-info mb-3 w-75'>$ 300/60分鐘</p>
                            </div>
                            <div className='col-lg-6'>
                                <p className='span mx-5 p-3 '>拳擊格鬥 </p>
                                <p className='span mx-5 p-3'>懸吊運動</p>
                                <p className='span mx-5 p-3'>混合健身</p>
                                <p className='span mx-5 p-3'>高強度間歇訓練</p>
                                <p className='span mx-5 p-3'>有氧訓練</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-0 mb-5 mx-5 w-75 text-center'>
                    <button href="#" class="btn col-lg-5 bg-info mx-3 p-3">立即租借</button>
                    <button href="#" class="btn col-lg-5 bg-info mx-3 p-3">聯絡場地</button>
                </div>
                

                <div className='row mt-0 justify-content-end'>
                    <div className='col-9 '>
                            <div className='container'>
                                <p id='title' className='container'>場地簡介</p>
                                <div className='container'>
                                    <p>
                                        在離開俱樂部後，我也台中到處跑去上課，深知自由教練的不易，剛好有機會承租了這個店面，環境不大，但該有的設備都有，專門為自由教練所準備的場地，外面有個休息區，沒課的時候可以在這裡休息、訓練。
                                        會招收少數的會員自主訓練，在這裏不會有太大的壓力，不會有教練強迫推銷課程，可以很自在的在這裡運動，環境都有監視器、置物櫃，也有準備AED，櫃檯處也提供咖啡機使用。
                                    </p>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <p id='title' className='container'>租借限制</p>
                                <div className='container'>
                                    <p>無限制，一般消費者、教練/老師皆可租借(可帶學員入場教學)</p>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <p id='title' className='container'>設備與服務</p>
                                <ul>
                                    <li>場地器材</li>
                                    <ul>
                                        <p>基本設施</p>
                                    </ul>
                                    <li>場館設備</li>
                                    <ul>
                                        <p>基本設施</p>
                                        <p>安全設施</p>
                                        <p>衛浴清潔</p>
                                        <p>其他服務</p>
                                    </ul>
                                </ul>
                            </div>
                            <div className='container-fluid'>
                                <p id='title' className='container'>營業時段</p>
                                <ul>
                                    <li>固定開放時段</li>
                                </ul>
                                <div className='container'>
                                    <div className="row">
                                        <table className="table" data-toggle="table">
                                            <thead>
                                                <tr>
                                                    <th scope="row" className='bg-info'>週一</th>
                                                    <td>08:00 ~ 23:00</td>
                                                    <th scope="row" className='bg-info'>週二</th>
                                                    <td>08:00 ~ 23:00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className='bg-info'>週三</th>
                                                    <td>08:00 ~ 23:00</td>
                                                    <th scope="row" className='bg-info'>週四</th>
                                                    <td>08:00 ~ 23:00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className='bg-info'>週五</th>
                                                    <td>08:00 ~ 23:00</td>
                                                    <th scope="row" className='bg-info'>週六</th>
                                                    <td>08:00 ~ 23:00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className='bg-info'>週日</th>
                                                    <td>08:00 ~ 23:00</td>
                                                    <th scope="row"></th>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                
                                </div>
                            </div> 
                            <div className='container-fluid'>
                                <p id='title' className='container'>地址</p>
                                <div className='row align-items-center m-2'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.055014686727!2d120.70789029999999!3d24.169803299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917f71782ec5b%3A0xdf6c6936864c2259!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTU2LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1655384835675!5m2!1szh-TW!2stw" className='col-lg-6' height='300vh'></iframe>
                                    <div className='col-lg-6 container text-center'>
                                        <p className='text-align:center'>臺中市北屯區東山路一段156-6</p>
                                        <a href="https://goo.gl/maps/PnXNtARA1F72HbM67" target="_blank">
                                            <img id='icon' src={require('../icon/google-maps.png')} />查看地圖
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <p id='title' className='container'>收費方式</p>
                                <ul>
                                    <li>預約</li>
                                    <p>正常時段：$ 300 / 60 分鐘最低購買次數為 1 次購買滿 30 次，每次折扣 $ 100</p>
                                </ul>
                            </div>                                          
                            <div className='container-fluid'>
                                <p id='title' className='container'>取消政策</p>
                                <div className='container'>
                                    <div className='row'>
                                        <h5 className='col-lg-5 p-3'><img id='icon' src={require('../icon/check.png')} className='mx-2'/>
                                            課程開始1小時前
                                        <span style={{fontSize: '15px'}}> (可全額退款100%) </span>
                                        </h5>
                                        <h5 className='col-lg-5 p-3'><img id='icon' src={require('../icon/cross.png')} className='mx-2'/>
                                            課程開始少於1小時
                                            <span style={{fontSize: '15px'}}> (不可退款) </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <p id='title' className='container'>注意事項</p>
                                <div className='container'>
                                    <div className='row'>
                                        <h5 className='col-lg-12 p-3'><img id='icon' src={require('../icon/no-smoke.png')} className='mx-2'/>禁止吸煙</h5>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='col-lg-3 '>
                        <h3 className='text-center mb-5'>課後評價</h3>
                        <div className='container-fluid'>
                            <Evaluation />
                            <Evaluation />
                            <Evaluation />
                            <Evaluation />
                        </div>
                    </div>
                </div><br />
                

                <div className='row mx-5 border'>
                    <p id='title' className='col-lg-12 mt-3'>授課師資</p>
                    <Teachers />
                </div><br />

                <div className='row mx-5 '>
                    <h1 id='title' className='col-lg-12 mt-3'>關聯課程</h1>
                    <div className='container-fluid col-lg-11'>
                        <div className='row mt-4'>
                            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} interval={3000}>
                                <Carousel.Item>
                                    <div className='row justify-content-center'>
                                        <Card /><Card /><Card /><Card /><Card />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                        <div className='row justify-content-center'>
                                            <Card /><Card /><Card /><Card /><Card />
                                        </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Course;