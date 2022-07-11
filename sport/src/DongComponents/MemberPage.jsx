import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MemberPage extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-3'>
                        <NavLink to="member/info"><h1>MemberInfo</h1></NavLink>
                        <NavLink to="member/post"><h1>MemberPost</h1></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberPage;