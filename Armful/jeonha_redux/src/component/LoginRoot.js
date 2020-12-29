import React, {Component} from 'react';
import LoginContent from '../containers/LoginContent';
import LogoutContent from '../containers/LogoutContent';
import ReadCustomer from '../containers/ReadCustomer';
import store from '../store';

export default class LoginRoot extends Component {
    state = {
        mode:store.getState().mode
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode:store.getState().mode});           
        }.bind(this));
    }

    getLogout(){
        let _article = null;
        if(this.state.mode === 'readCustomer'){
            _article = <LogoutContent></LogoutContent>
        }
        return _article;
    }

    getLogin(){
        let _article = null;
        if(this.state.mode === 'login'){
          _article = <LoginContent></LoginContent>}
        else if(this.state.mode === 'readCustomer'){
          _article = <ReadCustomer></ReadCustomer>
        }
        return _article;
      }

    render() {
        return (
            <div>
                {this.getLogin()}
                {this.getLogout()}
            </div>
        )
    }
}