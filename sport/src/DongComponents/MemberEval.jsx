import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

class MemberPlan extends Component {
    state = {
        // 會員帳號Id, 會員帳號
        accountId: undefined, account: '', newId: [],
        // 評論id, 評論內容, 評論星數, 
        id: '', info: '', value: '',

    }

    // 取得會員Id
    componentDidMount = () => {
        this.state.accountId = this.props.match.params.id;
        this.MemberOrderList(this.props.match.params.id)
        this.setState({})
    }

    // 取得會員訂單資料
    MemberOrderList = async(memberId) => {
        const Qs = require("qs");
        await axios.post("http://localhost:80/spost/JeromePHP/memberOrderList.php", Qs.stringify({ 
            id: memberId,
            info: window.localStorage.info
        }))
        .then( response => {
            // console.log(response.data)
        })
    }

    // 變化 Accordion 圖片
    accChange = (e) => {
        if ( e.currentTarget.getAttribute('aria-expanded') == 'false') {
            e.currentTarget.querySelector('img').src = require('../imgs/up-arrow.png')
        }else {
            e.currentTarget.querySelector('img').src = require('../imgs/down-arrow.png')
        }
    }

    // 資料暫存 localStorage
    onChangeForm = (e, newValue) => {
        if ( e.target.rows ) {
            this.state.id = e.currentTarget.parentElement.getAttribute('value')
            this.state.info = e.target.value
            this.setState({})
        }else {
            this.state.id = e.currentTarget.parentElement.parentElement.getAttribute('value')
            this.state.value = newValue
            this.setState({})
        }
        window.localStorage.setItem(this.state.id, `${this.state.info},${this.state.value}`)
    }

    // 評論寫入自料庫
    formPost = () => {
        
    }

    // 清除 localStorage
    componentWillUnmount = () => {
        this.state.newId.map( val => {
            window.localStorage.removeItem(val)
        })
    }

    render() {
        return (
            <div className='container'>                
                <div className='row' id='ok'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-9 mt-5 shadow'>
                        {/* 課程 */}
                        <h3 className='text-start mt-3'>課程</h3>
                        <Accordion>
                            <AccordionSummary id="panel1bh-header" onClick={this.accChange}>
                                <Typography sx={{ width: '39%', flexShrink: 0 }}> 課程 test-1 </Typography>
                                <Typography sx={{ width: '59%', color: 'text.secondary' }}>I am an accordion</Typography>
                                <Typography sx={{ width: '2%' }}>
                                    <img className='w-100' src={ require('../imgs/down-arrow.png') }/>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className='row'>
                                        <div className='col-lg-7'>
                                            <form value='a'> 
                                                <textarea className="w-100" rows='5' onChange={this.onChangeForm} />
                                                <div className='row align-items-center mt-2'>
                                                    <div className="col-lg-8" value='a' >
                                                        <Rating value={this.state.value} onChange={this.onChangeForm} />
                                                    </div>
                                                    <div className='col-lg-4'>
                                                        <button className='btn btn-outline-info w-100' type='button'
                                                            onClick={this.formPost}>
                                                            送出評論
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='col-lg-5 border'>

                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        {/* 場地 */}
                        <h3 className='text-start mt-5'>場地</h3>
                        <Accordion  >
                            <AccordionSummary id="panel1bh-header" onClick={this.accChange}>
                                <Typography sx={{ width: '39%', flexShrink: 0 }}> 場地 test-1 </Typography>
                                <Typography sx={{ width: '59%', color: 'text.secondary' }}>I am an accordion</Typography>
                                <Typography sx={{ width: '2%' }}>
                                    <img className='w-100' src={ require('../imgs/down-arrow.png') } />
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                <div className='row'>
                                        <div className='col-lg-7'>
                                            <form>
                                                <textarea className='w-100' rows='5' onChange={this.onChangeForm}/>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-8 mt-1'>
                                                        <Rating value={this.state.value} onChange={this.onChangeForm}/>
                                                    </div>
                                                    <div className='col-lg-4'>
                                                        <button className='btn btn-outline-info w-100' type='button'
                                                            onClick={this.formPost}>
                                                            送出評論
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='col-lg-5 border'>

                                        </div>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default MemberPlan;