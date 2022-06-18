import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';

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
                        <div className="">
  
                             <button className='btn btn-danger w-100 rounded-3 mt-0'
                             type="button"
                            href="/loginRegister"
                             >加入會員</button>
  
                        </div>
    
                        </div>
                    </div>

                </div>

                <div className='col-md-12 col-xl-7 border border-info'>
                    右邊內容
                </div>
                

                


                



            </div>
            </header>
        );
    }
}
 
export default HomeHead;