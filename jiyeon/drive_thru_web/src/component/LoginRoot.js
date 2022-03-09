import React, {Component} from 'react';
import LoginContent from '../containers/LoginContent';
import store from '../store';

export default class LoginRoot extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getLogin(){
        let _article = null;
        if(this.state.mode_content === 'LOGIN'){
          _article = <LoginContent></LoginContent>}
        
        return _article;
      }
    render() {
        return (
            <>
                {this.getLogin()}
            </>
        )
    }
    
}

