import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Label extends Component {
    state = {
        font: []
    } 



    render() { 
        return (
            <div className='w-100 py-2 px-3 my-3 '>
                <div className='mt-3 animate__animated animate__flipInX'>
                    <button className='btn w-100 text-start ' > 拳擊格鬥 </button>
                </div>
                <div className='mt-3 animate__animated animate__flipInX'>
                    <button className='btn w-100 text-start' > 拳擊格鬥 </button>
                </div>
                <div className='mt-3 animate__animated animate__flipInX'>
                    <button className='btn w-100 text-start' > 拳擊格鬥 </button>
                </div>
                <div className='mt-3 animate__animated animate__flipInX'>
                    <button className='btn w-100 text-start' > 拳擊格鬥 </button>
                </div>
                <div className='mt-3 animate__animated animate__flipInX'>
                    <button className='btn w-100 text-start' > 拳擊格鬥 </button>
                </div>
            </div>
        );
    }
}
 
export default Label;