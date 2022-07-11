import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class MemberPost extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-3'>
                        <NavLink to="info"><h3>MemberInfo</h3></NavLink>
                        <NavLink to="post"><h3>MemberPost</h3></NavLink>
                    </div>
                    <div className='col-9'>
                        <h2>post test..</h2>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MemberPost;