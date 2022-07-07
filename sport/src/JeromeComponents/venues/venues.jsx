import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Evaluation from '../Evaluation';
import Teachers from '../teachers';
import '../../scss/all.css';

// import Head from './components/head';

class Venues extends Component {
    state = {  } ;


    render() { 
        return (
            <div id="box">
                <div className='container my-5'>
                    <h2 className='col-lg-12 my-3 text-center'>每日線上視訊直播運動課程</h2>
                </div>
                <div className='container-fluid my-5'>
                    <div className='row justify-content-center'>
                        <div className="col-lg-5">
                            <h3 className='container title p-2'>課程簡介</h3>
                            <div className='container'>
                            <p>
                                在離開俱樂部後，我也台中到處跑去上課，深知自由教練的不易，剛好有機會承租了這個店面，環境不大，但該有的設備都有，專門為自由教練所準備的場地，外面有個休息區，沒課的時候可以在這裡休息、訓練。
                                會招收少數的會員自主訓練，在這裏不會有太大的壓力，不會有教練強迫推銷課程，可以很自在的在這裡運動，環境都有監視器、置物櫃，也有準備AED，櫃檯處也提供咖啡機使用。
                            </p>
                            </div>

                            <h3 className='container title p-2'>課程時段</h3>
                            <div className='container w-100'>
                                <table className="table" data-toggle="table">
                                    <thead>
                                        <tr>
                                            <th scope="row" className='bg-info'>週一</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週二</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週三</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週四</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週五</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週六</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className='bg-info'>週日</th>
                                            <td>08:00 ~ 23:00</td>
                                            <td>$ 1000</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className='col-lg-5 row justify-content-center'>
                            <div className='row justify-content-center'>
                                <div className='row mt-1'>
                                    <div className='col-lg-6 mt-4 mb-0 text-center'>
                                        <div className='row justify-content-center my-4'>
                                            <img src="https://dummyimage.com/1000/000/fff" 
                                                className='col-lg-10 img-fluid my-2 rounded-circle h-100'/> 
                                        </div>
                                        <h4 className='mt-2'>$ 50+ </h4>
                                        <button className='button m-1 my-4 w-100'>聯絡師資</button><br />
                                        <button className='button m-1 w-100'>立即購課</button>
                                    </div>
                                    <div className='col-lg-6 mt-5 ml-1 text-center'>
                                        <div className='col-lg-12  my-5 text-center'>
                                            <img className='icon' src={require('./components/icon/place.png')} />
                                            <span >線上視訊教學</span>
                                        </div>
                                        <div className='my-2'>
                                            <p className='spa'>團體課程</p><br />
                                            <p className='spa'>混合健身</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='container'>
                                <h3 className='container title p-2'>課程地點</h3>
                                <div className='container'>
                                    <div id='map' className='row align-items-center m-2'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.055014686727!2d120.70789029999999!3d24.169803299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917f71782ec5b%3A0xdf6c6936864c2259!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTU2LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1655384835675!5m2!1szh-TW!2stw" className='col-lg-6' height='300vh'></iframe>
                                        <div className='col-lg-6 container text-center'>
                                            <p className='text-align:center'>臺中市北屯區東山路一段156-6</p>
                                            <a href="https://goo.gl/maps/PnXNtARA1F72HbM67" target="_blank">
                                                <img className='icon' src={require('./components/icon/google-maps.png')} />查看地圖
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <h3 className='container title p-2'>授課師資</h3>
                                <Teachers />
                            </div>
                            <div className='container'>
                                <h3 className='container title p-2'>取消政策</h3>
                                <div className='container'>
                                    <div className='row'>
                                        <h5 className='col-lg-5 p-3'><img src={require('./components/icon/check.png')} className='icon mx-2'/>
                                            課程開始1小時前
                                            <span style={{fontSize: '15px'}}> (可全額退款100%) </span>
                                        </h5>
                                        <h5 className='col-lg-5 p-3'><img src={require('./components/icon/cross.png')} className='icon mx-2'/>
                                            課程開始少於1小時
                                            <span style={{fontSize: '15px'}}> (不可退款) </span>
                                        </h5>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className='col-lg-3'>
                            <h3 className='text-center mb-5'>課後評價</h3>
                            <div className='container-fluid'>
                                <Evaluation />
                                <Evaluation />
                                <Evaluation />
                                <Evaluation />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mx-5'>
                    <h3 id='title' className='col-lg-12 mt-3'>關聯課程</h3>
                    <div className='container-fluid col-lg-11'>
                        <div className='row mt-4'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Venues;