import React, { Component } from 'react';
import '../../scss/all.css';
// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';

import leftImg from '../../img/ben01.jpg';

class HomeHead extends Component {
    state = { 

    } 



    render() { 
        return (
            <header>
                
            <div className='HomeHeadBoxStyle row mx-auto'>

                <div className='col-md-12 col-xl-5 border border-primary container HomeHeadBoxLeft'>

                    <img src={leftImg} className="img-fluid HomeHeadBoxImgStyle w-100 h-100 "alt="" />
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

                <div className='col-md-12 col-xl-7 border border-info'>
                    <div className='test1'>右邊內容</div>

                    
                </div>
            </div>
            <div className='HomeHeadBoxStyle row mx-auto'>
                    <div className='btn btn-test'>下邊內容</div>
                    <div className='text-test'>右邊內容</div>
                    <div className='bg-test'>右邊內容</div>
                    <div className='btn btn-test1 mt-md-6'>右邊內容</div>
                    <div className='text-test1'>右邊內容</div>
                    <div className='bg-test1'>右邊內容</div>
            </div>
            </header>
        );
    }
}
 
export default HomeHead;