import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousels from './carousels';
import Labels from './label'

import Rating from '@mui/material/Rating';  // npm install @mui/material @emotion/react @emotion/styled
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

// 輪播圖function
function handleClick(event) {
    event.preventDefault();
}

function Head(props) {
    const [news, setNews] = useState(undefined)
    const [city, setCity] = useState()

    // 傳入news ( news: 資料庫(place)資訊 )
    useEffect( () => {
        setNews(props.all)
    }, [props])

    // 地址拆分 (市 & 區)
    useEffect( () => {
        if ( typeof news == 'object' ) {
            if (  news.addr.indexOf("區") != -1 ) {
                setCity([news.addr.split(' ')[0].slice(0, 3), news.addr.split(' ')[0].slice(3, news.addr.indexOf("區")+1)])
            }else {
                setCity([news.addr.split(' ')[0].slice(0, 3), news.addr.split(' ')[0].slice(3, 6)])
            }
        }
    }, [news])

    return (
        <div className='container mb-3 mt-6'>
            <div className='row'>
                <div className='col-lg-12 my-3 animate__animated animate__slideInDown '>
                    <Stack>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            <Link underline="hover" key="1" color="inherit" onClick={handleClick} href="/">
                                首頁
                            </Link>
                            <Link
                                underline="hover" key="2" color="inherit" onClick={handleClick}
                                href="/material-ui/getting-started/installation/" >
                                探索
                            </Link>
                            <Typography key="3" color="text.primary">
                                {news && news.title}
                            </Typography>
                        </Breadcrumbs>
                    </Stack>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8' >
                    <div className='w-100 border' >
                        <Carousels  gif={news && [news.img1, news.img2, news.img3]}/>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='row'  >
                        <div className='col-lg-12' >
                            <div className='row position-fixed"'>
                                <div className='col-lg-5 mt-3 mb-3'>
                                    <img src="https://dummyimage.com/1000/000/fff" 
                                        className='img-fluid rounded-circle animate__animated animate__rotateInDownLeft'/>
                                </div>
                                <div className='col-lg-6 mt-5'>
                                    <Stack spacing={1} className='w-100' >
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12' style={{transform: 'translate(10%, 0)'}}>
                            <div className='w-100 py-2 px-3 my-3'>
                                <Labels types={news && news.type} />
                            </div> 
                        </div>
                    </div>
                </div>

                <div className='row mt-3 animate__animated animate__slideInDown'>
                    <p className='text-center my-1' id='title'><h1>{news && news.title}</h1></p>
                </div>
                <div className='row mt-3 align-items-center justify-content-center'>
                    <div className='col-lg-8' style={{ zIndex: '2'}}>
                        <div className='w-100'>
                            <div className='container animate__animated animate__slideInDown '>
                                <div>
                                    <p>台灣 / {city && city[0]} / {city && city[1]} </p>
                                    <h5 className='container text-star'>
                                        <img src={require('./icon/location.png')} style={{height: '3vh'}}/>
                                        &nbsp; {news && news.addr} 
                                    </h5>
                                </div>
                                <br />
                                <div className='my-1'>
                                    <h5 className='container text-star' >
                                        <img src={require('./icon/time.png')} style={{height: '3vh'}}/>
                                        &nbsp; $ {news && news.price} / {news && news.pricepertime} 
                                    </h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='row justify-content-center animate__animated animate__slideInDown '>
                            <a href="#reserve" className='col-lg-12 btn px-3 bg-black w-75' id='linkA'><h3>立即租借</h3></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default Head;