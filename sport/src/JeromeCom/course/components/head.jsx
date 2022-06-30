import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Rating from '@mui/material/Rating';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';


import Carousels from './carousels';
import Label from './label';



function handleClick(event) {
    event.preventDefault();
    // console.info('You clicked a breadcrumb.');
}

function Head() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" onClick={handleClick} href="/">
          首頁
        </Link>,
        <Link
          underline="hover" key="2" color="inherit" onClick={handleClick}
          href="/material-ui/getting-started/installation/" >
          探索
        </Link>,
        <Typography key="3" color="text.primary">
          肌地台 自由教練場地租借
        </Typography>,
      ];

    return (
        <div className='container mb-3'>
            <div className='row'>
                <div className='col-lg-12 my-3 animate__animated animate__slideInDown '>
                    <Stack>
                        <Breadcrumbs separator="›" aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8' >
                    <div className='w-100 border' >
                        <Carousels  />
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
                            <Label   />
                        </div>
                    </div>
                </div>

                <div className='row mt-3 animate__animated animate__slideInDown'>
                    <p className='text-center my-1' id='title'><h1>肌地台 自由教練場地租借</h1></p>
                </div>
                <div className='row mt-3 align-items-center justify-content-center'>
                    <div className='col-lg-8' style={{ zIndex: '2'}}>
                        <div className='w-100'>
                            <div className='container animate__animated animate__slideInDown '>
                                <div>
                                    <p>台灣 / 台中市 / 北屯區 </p>
                                    <h5 className='container text-star'>
                                        <img src={require('./icon/location.png')} style={{height: '3vh'}}/>
                                        &nbsp; 臺中市北屯區東山路一段156-6 
                                    </h5>
                                </div>
                                <br />
                                <div className='my-1'>
                                    <h5 className='container text-star' >
                                        <img src={require('./icon/time.png')} style={{height: '3vh'}}/>
                                        &nbsp; $ 300/60分鐘 
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