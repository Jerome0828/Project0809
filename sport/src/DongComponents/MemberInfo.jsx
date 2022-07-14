import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MemberPage from '../DongComponents/MemberPage.jsx';


class MemberInfo extends Component {
    state = {
        // 會員帳號
        account: '',
        // 頭像, 真實姓名, 暱稱, email, 生日, 手機號碼, 性別   
        img: '', realName: '', nickname: '', email: '', birthday: '', phone: '', gender: '',
        // 密碼, 再次輸入密碼
        password: '', passwordAgain: ''
    }

    // 載入會員資料
    componentDidMount = () => {
        this.memberInfo();
    }

    // memberInfo
    memberInfo = async() => {
        const Qs = require("qs");
        // await axios.post("http://localhost:80/spost/JeromePHP/memberInfo.php", Qs.stringify({ account:   }))
        // .then( response => {
            
        // })
    }

    // 頭像預覽
    fileInput = (e) => {
        this.state.img = URL.createObjectURL(e.target.files[0]);
        this.setState({})
    }

    // 表單變更
    formChange = (e) => {
        if (e.target.name == 'gender') {
            this.state[e.target.name] = e.target[e.target.selectedIndex].value
        }else {
            this.state[e.target.name] = e.target.value
        }
        this.setState({})
    }

    // 表單送出
    memberUpdate = () => {
        const Qs = require("qs");
        // await axios.post("http://localhost:80/spost/JeromePHP/memberUpdate.php", Qs.stringify({ account:   }))
        // .then( response => {
            
        // })
    }

    render() {
        return (
            <div className='container'>
                <br /><br /><br />
                <div className='row'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-9'>
                        <form>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <p>帳號</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4 '>
                                            <p>上傳頭貼</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="file" accept="image/gif, image/jpeg, image/png" onChange={this.fileInput} className="rounded shadow form-control"/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>真實姓名</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" value={this.state.realName} onChange={this.formChange}name='realName'/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>暱稱</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" value={this.state.nickname} onChange={this.formChange}
                                            name='nickname'/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>E-mail</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="email" value={this.state.email} onChange={this.formChange}
                                            name='email'/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>生日</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="date" value={this.state.birthday} onChange={this.formChange}
                                            name='birthday'/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>手機號碼</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" value={this.state.phone} onChange={this.formChange}
                                            name='phone' maxLength="10" pattern="^[0][9][0-9]{8}$"/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>性別</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <select className='text-center' onChange={this.formChange} name='gender'>
                                                <option value='M'>男</option>
                                                <option value='F'>女</option>
                                                <option value='S'>秘密</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <img src={this.state.img} width='100%'/>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>修改密碼</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>再次輸入密碼</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center mt-3'>
                                <button type="button" className='btn col-lg-6 bg-info' onClick={this.memberUpdate}>確認變更</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberInfo;