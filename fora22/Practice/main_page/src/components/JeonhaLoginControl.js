import React, { Component } from 'react';
import JeonhaLoginInput from './JeonhaLoginInput';

class JeonhaLoginControl extends Component {
    render() {
        const LoginControlStyle = {
            position: 'fixed',
            top: '2%',
            right: '5%',
            text_decoration:'none'
        }
        let _loginWindow, _loginLabel = null;
        if (this.props.loginCheck === false) {
            _loginLabel = <div style = {LoginControlStyle}>Login</div>
            _loginWindow = <JeonhaLoginInput onSubmit={function(){
                this.props.appOnSubmit();
            }.bind(this)}></JeonhaLoginInput>
        } else {
            _loginLabel = <div style = {LoginControlStyle}>My Page</div>
        }
        
        return (
            <div className="Login_Control">
                {_loginLabel}
                {_loginWindow}
                
                
            </div>
        );
    }
}

export default JeonhaLoginControl;