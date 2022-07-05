import React, { useState, useEffect } from 'react';
import Teachers from '../../teachers';
import Evaluation from '../../Evaluation';
import Monthly from './monthly';


function Body(props) {
    const [news, setNews] = useState(undefined)

    useEffect( () => {
        setNews(props.all)
    }, [props])

    let address = () => {
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB09_GtwzgJdeUBYhUL91I60stBPgC_i4U&q=${news && news.addr}`
    }


    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>場地簡介</p>
                        <div className='container'>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {news && news.info}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div  id='reserve'></div>
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
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>預約狀況</p>
                        <Monthly news={news && news} pid={news && news.pid}/>
                    </div>
                    <hr />
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>授課師資</p>
                        <Teachers />
                    </div>
                    <hr />
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>地址</p>
                        <div className='row align-items-center m-2'>
                            <h4 className='text-center m-1'>{news && news.addr}</h4>
                            <iframe src={address()} frameborder="0" className='col-lg-12 mt-3' height='400vh'></iframe>
                        </div>
                    </div>
                    <hr />
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
                </div>
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