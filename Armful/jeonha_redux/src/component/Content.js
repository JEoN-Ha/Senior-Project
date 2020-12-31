import React, {Component} from 'react';
import store from '../store';
import Welcome from './Welcome';
import Menu from './Menu';
import Basket_con from '../containers/Basket_con';

export default class Content extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getBasket(){
        let _article = null;
        if(this.state.mode_content === 'MENU'){
            _article = <Basket_con></Basket_con>
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
        return _article;
    }
    render() {
        return (
            <div>
                {this.getContent()}
                {this.getBasket()}
            </div>
        )
    }
}