import React, {Component} from 'react';
import LoginContent from '../containers/LoginContent';
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
            </div>
        )
    }
}