import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'; //npm i react-tooltip
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends Component {
  state = {
    opacity: [0, 1, 0, 0], display: ['', '', '', ''], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden'],
    class: "",
    // 載入特效, 
    passwordCheck: "",
    // 密碼暫存
    aeh: '', vec: '',  pwd: '',
    // 帳號or信箱不存在, 驗證碼錯誤, 兩次密碼不相同
    aew: '',  pwr: '',  
    // 帳號or信箱錯誤, 密碼錯誤
    adr: '',  emr: '', cel: ''
    // 帳號已註冊, 信箱已註冊, 電話提示
  }

  // 正規檢查 //
  reX = (e) => {
    // Email正規檢查
    let eml = new RegExp(/^[a-za-z0-9_-]+@[a-za-z0-9_-]+(\.[a-za-z0-9_-]+)+$/);
    if ( eml.test(e.target.value) ) { this.setState({ emr: "Email 正確"}) }
    else { this.setState({ emr: "提示email"}) };

  }

// ---------------------------------
  // (註冊 & 忘記密碼) 檢查重複 //
  passwordCheck1 = (e) => {
    this.setState({passwordCheck: e.target.value})
  }
  passwordCheck2 =(e) => {
    if ( this.state.passwordCheck.length <= e.target.value.length ) {
      if ( this.state.passwordCheck != e.target.value) {
        this.setState({ pwd: "兩次密碼不相同"})
      }
    }
    else { this.setState({ pwd: "" }) }
  }


//------------------------------
  // 畫面滑動 //
  back = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [1, 0, 0, 0], marginLeft: ['50vw', '-0', '0', '0'], visibility: ['','hidden','hidden','hidden'],
      class: "animate__animated animate__slideInRight"})
    }
    else if ( this.state.opacity[2] == 1 ) { 
      this.setState({ opacity: [0, 1, 0, 0], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
    else { 
      this.setState({ opacity: [0, 1, 0, 0], marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
  }
  next = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [0, 0, 1, 0], marginLeft: ['-20vw', '-50vw', '20vw', '30vw'], visibility: ['hidden','hidden','','hidden'] })
    }
    else if ( this.state.opacity[2] == 1 ) {
      this.setState({ opacity: [0, 0, 0, 1], marginLeft: ['0', '-60vw', '-30vw', '0'], visibility: ['hidden','hidden','hidden','']})
    }
    else { 
      this.setState({ opacity: [0, 1, 0, 0],  marginLeft: ['0', '-20vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden']})
    }
  }

  // componentDidUpdate() 

  render() {
    return (
      <div className="loginA row" id='all'>
        {/* -- Forgot password -- */}
        <div className='login text-center ' 
          style={{ opacity: this.state.opacity[0], display: this.state.display[0],  marginLeft: this.state.marginLeft[0] }}>
          <h2 className='mt-4 text-center' > 忘記密碼 </h2>
          <span className='text-center w-100 my-0' style={{color: 'red'}}>
             {this.state.aeh} &nbsp; {this.state.vec} &nbsp; {this.state.pwd}
          </span>
          <div className='text-center mt-0' style={{width: "125%"}}>
            <div>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <img className='icon mx-3 my-1' src={require('../icon/profile.png')} />
                  <input className="input" type="text" placeholder="帳號 or Email" />
                  <button className='buttonL'>發送驗證碼</button>
                  <span className='text'></span>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal ">
                  <li className={`list-group-item w-100 ${this.state.class}`}>
                    <img className='icon mx-3 my-1' src={require('../icon/question.png')} />
                    <input className="input" type="e-mal" placeholder="請輸入驗證碼" />
                  </li>
              </ul>
              <ul className="list-group list-group-horizontal " >
                <li className={`list-group-item w-50 ${this.state.class}`}>
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input" type="password" onChange={this.passwordCheck1} placeholder="密碼"/>
                </li>
                <li className={`list-group-item w-50 ${this.state.class}`}>
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input" type="password" onChange={this.passwordCheck2} placeholder="再次輸入密碼" />
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-3'>
          <button type="submit" className='button my-2 mx-3' onClick={this.back}>確認變更</button>
            <button type="submit" className='button my-2 mx-3' onClick={this.back}>回到登入頁面</button>
          </div>
        </div>

        {/* -- Login -- */}
        <div className='login text-center' 
          style={{ opacity: this.state.opacity[1], display: this.state.display[1], marginLeft: this.state.marginLeft[1]}}>
          <div className="animate__animated animate__fadeInDown">
            <h2 className='my-4 text-center'>Login</h2>
            <p className='text-center w-100' style={{color: 'red'}}>
              {this.state.aew} &nbsp; {this.state.pwr}
            </p>
            <div className='container'>
              <div className="row">
                <div className='container mt-4 '>
                  <img className='icon mx-3 my-3' src={require('../icon/profile.png')} />
                  <input autoFocus="autofocus" className="input col-6 m-0" type="text" placeholder="帳號 or Email" /><br />
                  <img className='icon mx-3 my-3' src={require('../icon/password.png')} />
                  <input className="input col-6 m-0" type="password" placeholder="請輸入密碼"/><br />
                </div>
              </div>
            </div>
            <div className='mt-5'>
                <button type="submit" className='button my-2 mx-3' >登入</button>
                <button type="submit" className='button my-2 mx-3' onClick={this.next}>註冊</button>
            </div>
            <button type="submit" className='buttonL m-3' onClick={this.back}>忘記密碼 ?</button>
          </div>
          
        </div>
        {/* <div style={{backgroundColor: 'red', width: '300px', height: '300px '}}>aaa</div> */}
        {/* -- Sign up -- */}
        <div className='login text-center' 
            style={{ opacity: this.state.opacity[2], display: this.state.display[2], marginLeft: this.state.marginLeft[2]}}>
          <div className="row w-100 my-0">
            <button id='bti' className='col-1' onClick={this.back}><img id='icon1' src={require('../icon/left.png')} /></button>
            <h2 className='col-10 text-center'>註冊</h2>
            <p className='text-center w-100'></p>
          </div >
          <form className='' novalidate style={{width: "130%"}}>
              <ul className="list-group list-group-horizontal">
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/profile.png')} />
                      <input className="input" type="text" placeholder="帳號"/><br />
                      <span> &nbsp; {this.state.adr}</span>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/email.png')} />
                      <input className="input " type="e-mal" placeholder="Email" onChange={this.reX}/><br />
                      <span> &nbsp; {this.state.emr}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal " >
                <li class={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/password.png')} />
                      <input className="input" type="password" onChange={this.passwordCheck1} placeholder="密碼"/><br />
                      <span style={{color: 'red'}}> &nbsp; {this.state.pwr}</span>
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/password.png')} />
                      <input className="input" type="password" onChange={this.passwordCheck2} placeholder="再次輸入密碼"/>
                      <br />
                      <span style={{color: 'red'}}> &nbsp; {this.state.pwd}</span>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/identity-card.png')} />
                      <input className="input" type="text" placeholder="暱稱"/><br />
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/sex.png')} />
                      <select className='input text-center' name="性別" >
                          <option value="b">男</option>
                          <option value="g">女</option>
                          <option value="s">秘密</option>
                      </select>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-group list-group-horizontal" >
                <li className={`list-group-item w-100 ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/account.png')} />
                      <input className="input" type="text" placeholder="真實姓名" />
                    </div>
                  </div>
                </li>
                <li className={`list-group-item w-100  ${this.state.class}`}>
                  <div className='row'>
                    <div className='col-12'>
                      <img className='icon mx-3 my-1' src={require('../icon/mobile-app.png')} />
                      <input className="input" type="number" placeholder="連絡電話"/><br />
                    </div>
                  </div>
                </li>
              </ul>
          </form>
          <div className='mt-3'>
              <button type="submit" className='button my-3 mx-3' id='buts' onClick={this.next}>確認註冊</button>
          </div>
        </div>

        {/* -- Email 信箱驗證 -- */}
        <div className='login text-center' 
            style={{ opacity: this.state.opacity[3], display: this.state.display[3], marginLeft: this.state.marginLeft[3]}}>
          <div className="row my-4">
            <h2>Email 已送出</h2>
          </div >
          <div className={`container ${this.state.class}`}>
              <p className='m-5' >已向您的信箱 xxx 送出驗證信，請至您的信箱查收並完成驗證 </p>
              <p className='mt-5'>沒收到驗證信 ?</p>
              <button type="submit" className='buttonL mb-4'>再寄送一次</button>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-5 mx-3' id='buts' onClick={this.next}>回到登入頁面</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login ;
