import React, {Component} from 'react';
import store from '../store';
import LoginSignUpButton from '../containers/LoginSignUpButton_con';
import ReadCustomer from '../containers/ReadCustomer';

export default class SideBar extends Component {
    state = {
        mode:store.getState().mode,
        mode_content:store.getState().mo_mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode:store.getState().mode, mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getButton(){
        let _article = null;
        if(this.state.mode === 'login'){
          _article = <LoginSignUpButton></LoginSignUpButton>
        }
        else if(this.state.mode === 'readCustomer'){
            _article = <ReadCustomer></ReadCustomer>
          }
        return _article;
    }

    render() {
        return (
            <div>
                {this.getButton()}
            </div>
        )
    }
}