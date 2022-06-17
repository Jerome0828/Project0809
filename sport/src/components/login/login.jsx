import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

class Login extends Component {
    render() {
      return (
        <div className="login m-0">
            <h2>Login</h2>
            <div className="input-login">
                <img id='icon' src={require('../icon/login.png')} />
                <input id="input" type="text" placeholder="Username" />
            </div>
            <div className="input-login">
                <img id='icon' src={require('../icon/password.png')} />
                <input id="input" type="password" placeholder="Password"/>
            </div>
            <div>
                <button id="button" type="submit" className='my-1 mx-3'>LogIn</button>
                <button id="button" type="submit" className='my-1 mx-3'>Register</button>
            </div>
            <button id="buttonL" type="submit" className='mb-3'>Lost your Password ?</button>
        </div>
      )
    }
  }
  
  export default Login ;