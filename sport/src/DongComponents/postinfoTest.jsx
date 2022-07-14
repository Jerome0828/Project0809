import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import pic from '../imgs/fitness01.jpg';
import AlertDialog from './AlertDialog';
import Button from '@mui/material/Button';


// import '../scss/all.scss';
class PostinfoTest extends Component {
    state = {}

    render() {
        return (
            <>
                <div className="border-0 col-xl-3 col-lg-5 col-md-5 card">
                    <div className="border rounded shadow card h-100">
                        <div className="h-100">
                            <img style={{
                                height: '18em',
                                width: '100%',
                                background: 'white',
                                objectFit: 'cover',
                                objectPosition: '50% 50%'
                            }} src={pic} alt='testpic' className="card-img-top" />
                        </div>
                        <div className="card-body row ">
                            <div className="col-12">
                                <p className="card-title text-nowrap text-truncate">title</p>
                            </div>
                            <div className="col-12">
                                <p className="card-text text-nowrap text-truncate">name</p>

                            </div>
                            <p className="card-text text-nowrap text-truncate"><small className="text-muted">addr</small></p>
                            <div className="col-12">
                                <p><span className="p-1 rounded border border-dark fw-bold">type</span></p>
                            </div>
                            <div className="col-12">
                                <p><span className="p-1 rounded border border-dark fw-bold">mode</span></p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between bg-white card-footer ">
                            <span>評價</span>
                            <span>price</span>
                        </div>
                    </div>
                    <div className="mx-2 mt-3 d-flex justify-content-between bg-white">
                        <Button variant="outlined" color="success">
                            <NavLink className='text-decoration-none text-success' to="/member/post/01">修改</NavLink>
                        </Button>
                        <AlertDialog />
                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"
                            onClick={this.showModal}>
                            Open modal
                        </button> */}
                    </div>
                </div>



                {/* Modal */}
                
                

            </>
        );
    }
}

export default PostinfoTest;