import React, {Component} from 'react';
import SignUpContent from './SignUpContent';
import store from '../store';

export default class SignUpRoot extends Component {
    state = {
        mode_content:store.getState().mo_mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getSignUp(){
        let _article = null;
        if(this.state.mode_content === '회원가입'){
          _article = <SignUpContent></SignUpContent>}
        
        return _article;
      }
    render() {
        return (
            <div>
                {this.getSignUp()}
            </div>
        )
    }
    
}