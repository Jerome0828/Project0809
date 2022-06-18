import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends Component {
  state = {
    opacity: [1,0], translate: ['0','50%']
  }

  register = () => {
    if ( this.state.opacity[0] != 1 ) { this.setState({opacity: [1, 0], translate: ['0','50%']}) }
    else { this.setState({opacity: [0, 1], translate: ['-100%','-100%']}) }
  }

  render() {
    return (
      <div id='box' className="login row">
        <div id='login' className='text-center' 
          style={{ opacity: this.state.opacity[0], transform: `translate(${this.state.translate[0]},0)`}}>
          <h2>Login</h2>
          <div className='container'>
            <div className="row">
              <div className='container mt-3'>
                <img className='icon col-6 mx-3 my-3' src={require('../icon/login.png')} />
                <input className="input col-6 m-0" type="text" placeholder="Username" data-tip data-for="Username"/><br />
                <ReactTooltip id="Username" type='error' place="right" effect="solid" event='click'>aaa</ReactTooltip>
                 
                <img className='icon col-6 mx-3 my-3' src={require('../icon/password.png')} />
                <input className="input col-6 m-0" type="password" placeholder="Password" onClick={console.log(this.tooltips)}/>
              </div>
            </div>
          </div>
          <div className='mt-3'>
              <button type="submit" className='button my-2 mx-3' >LogIn</button>
              <button type="submit" className='button my-2 mx-3' onClick={this.register}>Sign up</button>
          </div>
          <button id="buttonL" type="submit" className='mb-3'>Forgot password ?</button>
        </div>

        <div id='login' className='text-center' 
            style={{ opacity: this.state.opacity[1], transform: `translate(${this.state.translate[1]},0)`}}>
          
          <div className="row">
            <button id='bti' className='button' onClick={this.register}><img id='icon1' src={require('../icon/left.png')} /></button>
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
              <button type="submit" className='button my-1 mx-3' id='buts'>Sign up fo Free</button>
          </div>
          <button id="buttonL" type="submit" className='mb-3'>Forgot password ?</button>
        </div>
      </div>
    )
  }
}

export default Login ;
