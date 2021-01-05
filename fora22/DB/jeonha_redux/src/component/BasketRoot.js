import React, {Component} from 'react';
import Basket from '../containers/Basket_con';
import store from '../store';

export default class BasketRoot extends Component {
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
        if(this.state.mode_content === '장바구니'){
          _article = <Basket></Basket>
        }
        return _article;
    }

    render() {
        return (
            <div>
                {this.getBasket()}
            </div>
        )
    }
}