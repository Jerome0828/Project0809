import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import PostinfoTest from '../DongComponents/postinfoTest.jsx';
class MemberPost extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row mt-5'>
                    <div className='col-2 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'>
                    </div>
                    {/* 已上傳Card */}
                    <div className='col-9'>
                        <PostinfoTest />
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberPost;