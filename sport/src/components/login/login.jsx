import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'; //npm i react-tooltip
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends Component {
  state = {
    opacity: [0,1,0,0], translate: ['-125%','-100%','-75%','100%']
  }

  back = () => {
    if ( this.state.opacity[2] == 1 ) { this.setState({opacity: [0, 1, 0, 0], translate: ['-125%','-100%','-75%','100%']}) }
    else if ( this.state.opacity[1] == 1 ) { this.setState({opacity: [1, 0, 0, 0], translate: ['0','0','0','100%']}) }
    else { this.setState({opacity: [0, 1, 0, 0], translate: ['-125%','-100%','-50%','100%']}) }
  }
  register = () => {
    if ( this.state.opacity[1] == 1 ) {  this.setState({opacity: [0, 0, 1,0], translate: ['-225%','-200%','-200%','-200%']}) }
    else if ( this.state.opacity[2] == 1 ) { this.setState({opacity: [0, 0, 0, 1], translate: ['-225%','  0','-300%','-300%']}) }
    else { this.setState({opacity: [0, 1, 0, 0], translate: ['-125%','-100%','-50%','-375%']}) }
  }

  render() {
    return (
      <div id='box' className="login row">
        <div id='login' className='text-center' 
          style={{ opacity: this.state.opacity[0], transform: `translate(${this.state.translate[0]},0)`}}>
          <div className="row justify-content-end">
            <button id='btj' className='button ' onClick={this.back}><img id='icon1' src={require('../icon/right.png')} /></button>
            <h2> ??????? </h2>
          </div >
          <div className='container'>
            <div className="row">
              <div className='container mt-3'>
                <img className='icon col-6 mx-2 my-3' src={require('../icon/email.png')} />
                <input className="input col-6 " type="e-mal" placeholder="Email" /><br />
                <img className='icon col-6 mx-3 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 m-0" type="password" placeholder="Password"/><br />
                <img className='icon col-6 mx-2 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 " type="password" placeholder="Password Again" /><br />
              </div>
            </div>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-2 mx-3' >LogIn</button>
              <button type="submit" className='button my-2 mx-3' >Sign up</button>
          </div>
        </div>
        {/* -- 1 -- */}
        <div id='login' className='text-center' 
          style={{ opacity: this.state.opacity[1], transform: `translate(${this.state.translate[1]},0)`}}>
          <h2>Login</h2>
          <div className='container'>
            <div className="row">
              <div className='container mt-3'>
                <img className='icon col-6 mx-3 my-3' src={require('../icon/login.png')} />
                <input className="input col-6 m-0" type="text" placeholder="Username" data-tip data-for="Username"/><br />
                <ReactTooltip id="Username" type='error' place="right" effect="solid" event='click'>aaa</ReactTooltip>
                 
                <img className='icon col-6 mx-3 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 m-0" type="password" placeholder="Password"/>
              </div>
            </div>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-2 mx-3' >LogIn</button>
              <button type="submit" className='button my-2 mx-3' onClick={this.register}>Sign up</button>
          </div>
          <button id="buttonL" type="submit" className='mb-3' onClick={this.back}>Forgot password ?</button>
        </div>

        {/* -- 2 -- */}
        <div id='login' className='text-center' 
            style={{ opacity: this.state.opacity[2], transform: `translate(${this.state.translate[2]},0)`}}>
          <div className="row">
            <button id='bti' className='button' onClick={this.back}><img id='icon1' src={require('../icon/left.png')} /></button>
            <h2>Sign up</h2>
          </div >
          <div className='container'>
            <div className="row">
              <div className='container mt-3'>
                <img className='icon col-6 mx-2 my-3' src={require('../icon/login.png')} />
                <input className="input col-6 " type="text" placeholder="Username" /><br />
                <img className='icon col-6 mx-2 my-3' src={require('../icon/email.png')} />
                <input className="input col-6 " type="e-mal" placeholder="Email" /><br />
                <img className='icon col-6 mx-2 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 " type="password" placeholder="Password"/><br />
                <img className='icon col-6 mx-2 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 " type="password" placeholder="Password Again" /><br />
                <img className='icon col-6 mx-2 my-3' src={require('../icon/mobile-app.png')} />
                <input className="input col-6 " type="text" placeholder="Cellphone Number" /><br />
              </div>
            </div>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-5 mx-3' id='buts' onClick={this.register}>Sign up fo Free</button>
          </div>
        </div>

        {/* -- 3 -- */}
        <div id='login' className='text-center' 
            style={{ opacity: this.state.opacity[3], transform: `translate(${this.state.translate[3]},0)`}}>
          <div className="row">
            <h2>Email 已送出</h2>
          </div >
          <div className='container'>
              <p className='m-5 '>已向您的信箱 xxx 送出驗證信，請至您的信箱查收並完成驗證</p>
              <span className='mt-5'>沒收到驗證信 ?</span>
              <button id="buttonL" type="submit" className='mb-5'>再寄送一次</button>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-5 mx-3' id='buts' onClick={this.register}>LogIn</button>
          </div>
        </div>


      </div>
    )
  }
}

export default Login ;
