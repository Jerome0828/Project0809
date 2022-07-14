import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MemberPage from '../DongComponents/MemberPage.jsx';
import rightarrow from '../imgs/rightArrow.png';
class MemberPost extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MemberPost;