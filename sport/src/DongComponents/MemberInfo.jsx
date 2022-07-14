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

    // 表單變更(密碼)
    passwordChange = (e) => {
            // 密碼
        if ( e.target.placeholder == "密碼" ) {
            // 正規檢查
            let password = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
            if ( e.target.value.length < 6 ) {
            // this.state.pwa = '6位數，且使用一個英文字母和數字';
            // this.state.pwr = ''
            // this.state.pas[1] = false;
            // this.setState({})
        }else {
            // 正規檢查
            if ( password.test( e.target.value ) ) {
            // this.state.passwordCheck[0] = e.target.value
            // this.state.pwa = '';
            // this.state.pwr = '';
            // this.setState({})
            }else {
            // this.state.pwa = '';
            // this.state.pwr = '密碼格式錯誤';
            // this.state.pas[1] = false;
            // this.setState({})
            };
            // 重複檢查
            if ( this.state.passwordCheck[1].length != 0 ) {
            if ( this.state.passwordCheck[1] == e.target.value ) {
                // this.state.pwd = '';
                // this.state.pas = [e.target.value, true];
                // this.setState({})
            }else {
                // this.state.pwd = '兩次密碼不相同';
                // this.state.pas[1] = false;
                // this.setState({})
            }
            }
        }
      }
      // 再次輸入密碼
      if ( e.target.placeholder == "再次輸入密碼" ) {
        // 重複檢查
        if ( this.state.passwordCheck[0].length != 0 && this.state.passwordCheck[0].length <= e.target.value.length ) {
            if ( this.state.passwordCheck[0] == e.target.value) {
            this.state.pwd = '';
            this.state.pas = [e.target.value, true];
            this.setState({})
            }else {
            this.state.passwordCheck[1] = e.target.value;
            this.state.pwd = '兩次密碼不相同';
            this.state.pas[1] = false;
            this.setState({})
            }
        }else {
            this.state.pwd = '';
            this.setState({}) 
        }
      }
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
                                            <input type="text" onChange={this.passwordChange} name='password'/>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-4'>
                                            <p>再次輸入密碼</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <input type="text" onChange={this.passwordChange} name='passwordAgain'/>
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