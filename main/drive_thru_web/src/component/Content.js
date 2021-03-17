import React, {Component} from 'react';
import store from '../store';
import Welcome from './Welcome';
import Menu from './Menu';
import MyPage from '../containers/MyPage';
import BasketButton_con from '../containers/BasketButton_con';

export default class Content extends Component {
    state = {
        mode_content:store.getState().mode_content,
        mode:store.getState().mode
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    getBasketButton(){
        let _article = null;
        if(this.state.mode_content === 'MENU'){
            _article = <BasketButton_con></BasketButton_con>
        }
        return _article;

    }

    getContent(){
        let _article = null;
        if(this.state.mode_content === 'welcome'){
            _article = <Welcome></Welcome>
        }
        else if(this.state.mode_content === 'MENU'){
            _article = <Menu></Menu>
        }
        else if(this.state.mode_content === 'MY PAGE'){
            _article = <MyPage></MyPage>
        }
        return _article;
    }
    render() {
        return (
            <div>
                {this.getContent()}
                {this.getBasketButton()}
            </div>
        )
    }
}