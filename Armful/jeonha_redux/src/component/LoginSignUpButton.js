import React, {Component} from 'react';
import store from '../store';
import "./Component.css";

export default class LoginSignUpButton extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    render() {
        return (
            <div>
                <text onClick={function (e) {
                    e.preventDefault();
                    this.props.onClickLogin(e.target.innerText);
                }.bind(this)}>LOGIN</text>&nbsp;
                <text onClick={function (e) {
                    e.preventDefault();
                    this.props.onClickSignUp(e.target.innerText);
                }.bind(this)}>회원가입</text>
            </div>
        )
    }
}