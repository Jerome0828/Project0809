import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
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