import React, { Component } from 'react';
import '../../scss/all.css';
import 'bootstrap/dist/js/bootstrap';

import { NavLink } from 'react-router-dom';

import leftImg from '../../img/ben01.jpg';

import rightImg0 from '../../img/fitness03.jpg';
import rightImg1 from '../../img/fitness05.jpg';
import rightImg2 from '../../img/space01.jpg';
import rightImg3 from '../../img/space04.jpg';

class BecomeCoach extends Component {
    state = {  } 
    render() { 
        return (
            <header>
            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test' >
                測試成為教練
                </div>

                <div className='col-md-12 col-xl-6 bg-test1'>
                    右邊
                </div>
            </div>

            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test1' >
                測試成為教練
                </div>

                <div className='col-md-12 col-xl-6 bg-test'>
                    右邊
                </div>
            </div>
            </header>
        );
    }
}
 
export default BecomeCoach;