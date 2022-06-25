import React, { Component } from 'react';
import Teachers from '../../teachers';
import Evaluation from '../../Evaluation';
import Monthly from './monthly';


class Body extends Component {
    state = {  } 

    render() { 
        return (
            <div className='container mt-1'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='container' data-aos="fade-up">
                            <p id='title' className='container'>場地簡介</p>
                            <div className='container'>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                在離開俱樂部後，我也台中到處跑去上課，深知自由教練的不易，剛好有機會承租了這個店面，環境不大，但該有的設備都有，專門為自由教練所準備的場地，外面有個休息區，沒課的時候可以在這裡休息、訓練。
                                會招收少數的會員自主訓練，在這裏不會有太大的壓力，不會有教練強迫推銷課程，可以很自在的在這裡運動，環境都有監視器、置物櫃，也有準備AED，櫃檯處也提供咖啡機使用。
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className='container' data-aos="fade-up" >
                            <p id='title' className='container'>設備與服務</p>
                            <div className='container'>
                                <li className='mt-2'>場館設備</li>
                                    <h5 className='container m-2'>
                                        <img src={require('./icon/check.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>基本設施</span>
                                    </h5>
                                    
                                <li className='mt-2'>場館設備</li>
                                    <h5 className='container m-2'>
                                        <img src={require('./icon/check.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>安全設施</span>
                                    </h5>
                                    <h5 className='container m-2'>
                                        <img src={require('./icon/check.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>衛浴清潔</span>
                                    </h5>
                                    <h5 className='container m-2'>
                                        <img src={require('./icon/check.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>其他服務</span>
                                    </h5>
                            </div>
                        </div>
                        <hr />
                        <div  id='reserve'></div>
                        <div className='container' data-aos="fade-up">
                            <p id='title' className='container'>預約狀況</p>
                            <Monthly />
                        </div>
                        <hr />
                        <div className='container' data-aos="fade-up">
                            <p id='title' className='container'>開放時段</p>
                            <div className='container'>
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
                        <hr />
                        <div className='container' data-aos="fade-up">
                            <p id='title' className='container'>授課師資</p>
                            <Teachers />
                        </div>
                        <hr />
                        <div className='container' data-aos="fade-up">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <p id='title' className='container'>收費方式</p>
                                    
                                    <div className='container'>
                                        <h5>
                                            <img src={require('./icon/reserved.png')} style={{height: '3vh'}}/>
                                            <span className='mx-3'>預約</span>
                                        </h5>
                                        <p className='container'>
                                            正常時段：$ 300 / 60 分鐘最低購買次數為 1 次購買滿 30 次，每次折扣 $ 100。
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className='col-lg-6'>
                                    <p id='title' className='container'>注意事項</p>
                                    <h5 className='container'>
                                        <img src={require('./icon/no-smoke.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>禁止吸煙</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='container' data-aos="fade-up">
                            <p id='title' className='container'>地址</p>
                            <div className='row align-items-center m-2'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.055014686727!2d120.70789029999999!3d24.169803299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917f71782ec5b%3A0xdf6c6936864c2259!2zNDA25Y-w5Lit5biC5YyX5bGv5Y2A5p2x5bGx6Lev5LiA5q61MTU2LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1655384835675!5m2!1szh-TW!2stw" 
                                    className='col-lg-8' height='300vh'>
                                </iframe>
                                <div className='col-lg-4 container text-center'>
                                    <p className='text-align:center'>臺中市北屯區東山路一段156-6</p>
                                    <a href="https://goo.gl/maps/PnXNtARA1F72HbM67" target="_blank">
                                        <img id='icon' src={require('./icon/google-maps.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>查看地圖</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='container-fluid' data-aos="fade-up">
                            <p id='title' className='container'>取消政策</p>
                            <div className='container '>
                                <h5 className='col-lg-5 p-3 w-100'>
                                    <img src={require('./icon/check2.png')} style={{height: '3vh'}}/>
                                    <span className='mx-3'>課程開始1小時前</span>
                                    
                                    <span style={{fontSize: '15px'}}> (可全額退款100%) </span>
                                </h5>
                                <h5 className='col-lg-5 p-3 w-100'>
                                    <img src={require('./icon/cross.png')} style={{height: '3vh'}}/>
                                    <span className='mx-3'>課程開始少於1小時</span>
                                    <span style={{fontSize: '15px'}}> (不可退款) </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 bg-black'>
                        <h3 className='container text-end m-1'>課後評價</h3>
                        <div style={{transform: 'translate(10%, 0)'}}>
                            <Evaluation />
                            <Evaluation />
                            <Evaluation />
                            <Evaluation />
                            <Evaluation />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Body;