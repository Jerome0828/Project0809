import React, { useState, useEffect } from 'react';
import Teachers from '../../teachers';
import Evaluation from '../../Evaluation';
import Monthly from './monthly';

import Rating from '@mui/material/Rating';


function Body(props) {
    const [news, setNews] = useState(undefined);
    const [value, setValue] = useState(5);
    const [test, setTest] = useState();

    // 傳入news ( news: 資料庫(place)資訊 )
    useEffect( () => {
        setNews(props.all)
    }, [props])

    // 更新google地圖
    let address = () => {
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB09_GtwzgJdeUBYhUL91I60stBPgC_i4U&q=${news && news.addr}`
    }

    let commentChange = () => {
        console.log(test)
    }


    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-lg-8'>
                    {/* 場地簡介 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>場地簡介</p>
                        <div className='container'>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {news && news.info}
                            </p>
                        </div>
                    </div>
                     {/* "立即租借" 連結 */}
                     <div  id='reserve'></div>
                    <hr />
                    {/* 開放時段 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>開放時段</p>
                        <div className='container'>
                            <table className="table" data-toggle="table">
                                <thead>
                                    <tr>
                                        <th scope="row" className='bg-info'>週一</th>
                                        <td>{news && news.mon}</td>
                                        <th scope="row" className='bg-info'>週二</th>
                                        <td>{news && news.tue}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-info'>週三</th>
                                        <td>{news && news.wed}</td>
                                        <th scope="row" className='bg-info'>週四</th>
                                        <td>{news && news.thu}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-info'>週五</th>
                                        <td>{news && news.fri}</td>
                                        <th scope="row" className='bg-info'>週六</th>
                                        <td>{news && news.sat}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className='bg-info'>週日</th>
                                        <td>{news && news.sun}</td>
                                        <th scope="row"></th>
                                        <td></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <hr />
                    {/* 預約狀況 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>預約狀況</p>
                        <Monthly news={news && news} pid={news && news.pid}/>
                    </div>
                    <hr />
                    {/* 授課師資 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>授課師資</p>
                        <Teachers />
                    </div>
                    <hr />
                    {/* 地址 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>地址</p>
                        <div className='row align-items-center m-2'>
                            <h4 className='text-center m-1'>{news && news.addr}</h4>
                            <iframe src={address()} frameBorder="0" className='col-lg-12 mt-3' height='400vh'></iframe>
                        </div>
                    </div>
                    <hr />
                    {/* 取消政策 */}
                    <div className='container-fluid' data-aos="fade-up">
                        <div className='row'>
                            <div className='col-lg-7'>
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
                            <div className='col-lg-5'>
                                <p id='title' className='container'>注意事項</p>
                                <h5 className='container'>
                                    <img src={require('./icon/no-smoke.png')} style={{height: '3vh'}}/>
                                    <span className='mx-3'>禁止吸煙</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* 填寫評論 */}
                    <div className='container'>
                        <p id='title' className='container'>評論填寫</p>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 container mt-3'>
                                <div className='row'>
                                    {/* 會員資訊 */}
                                    <div className='col-lg-6'>
                                        <span className='mx-3'>fffff</span>
                                    </div>
                                    <div className='col-lg-6'>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(e, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-lg-8 container mt-3'>
                                    <form onChange={(e) => { setTest(e.target.value) }}>
                                        <textarea className='w-100' rows='5'  />
                                    </form>                                   
                                </div>
                                <div className='col-lg-3 border'>
                                <button className='position-absolute bottom-0 translate-middle-x' onClick={commentChange}>上傳評論</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 課後評價 */}
                <div className='col-lg-3 bg-black'>
                    <h3 className='container text-end m-1'>課後評價</h3>
                    <div style={{transform: 'translate(10%, 0)'}}>
                        <Evaluation />
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
export default Body;