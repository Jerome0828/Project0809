import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import rightarrow from '../imgs/rightArrow.png';

class MemberPage extends Component {
    state = {
    }


    mouseOver = (e) => {
        e.target.parentElement.children[0].style.opacity = 1;
    }

    onMouseOut = (e) => {
        e.target.parentElement.children[0].style.opacity = 0;
    }

    onClick = (e) => {
        // console.log(e.target.getAttribute);
        
    }
    // empty . remove
    render() {
        return (
            <>
                <NavLink to="/member/info" className="text-decoration-none text-dark">
                    <div className="d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p data-flag={false} onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>會員資料</p>
                    </div>
                </NavLink>

                <NavLink to="/member/post" className="text-decoration-none text-dark">
                    <div className="mt-3 d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p data-flag={false} onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>課程與場地</p>
                    </div>
                </NavLink>

                <NavLink to="/member/plan" className="text-decoration-none text-dark">
                    <div className="mt-3 d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p data-flag={false} onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>行程</p>
                    </div>
                </NavLink>
            </>
        );
    }
}

export default MemberPage;