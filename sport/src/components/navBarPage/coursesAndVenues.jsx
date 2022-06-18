import React, { Component } from 'react';
import '../../scss/all.css';

class CoursesAndVenues extends Component {
    state = {  } 
    render() { 
        return (
            <header>
            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test' >
                測試課程與場地
                </div>

                <div className='col-md-12 col-xl-6 bg-test1'>
                    右邊
                </div>
            </div>

            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test1' >
                測試課程與場地
                </div>

                <div className='col-md-12 col-xl-6 bg-test'>
                    右邊
                </div>
            </div>
            </header>
        );
    }
}
 
export default CoursesAndVenues;