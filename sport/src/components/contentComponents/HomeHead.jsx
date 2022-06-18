import React, { Component } from 'react';
import '../../scss/all.css';
// import 'bootstrap/dist/js/bootstrap';

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
                    <div className='test1'>右邊內容</div>
                    <div className='btn btn-test'>右邊內容</div>
                    <div className='text-test'>右邊內容</div>
                    <div className='bg-test'>右邊內容</div>
                    
                </div>
                

                


                



            </div>
            </header>
        );
    }
}
 
export default HomeHead;