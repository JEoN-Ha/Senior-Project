import React, {Component} from 'react';
import Basket from '../containers/Basket_con';
import Payment_drive from '../containers/Payment_drive';
import Payment_onFoot from '../containers/Payment_onFoot';
import CustomerType from '../containers/CustomerType';
import store from '../store';

export default class BasketRoot extends Component {
    state = {
        mode_content:store.getState().mode_content,
        customerType:store.getState().customerType
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content,
                customerType:store.getState().customerType});           
        }.bind(this));
    }

    getPayment_drive(){
        let _article = null;
        if(this.state.mode_content === 'payment' && this.state.customerType === 'Drive-Thru'){
          _article = <Payment_drive></Payment_drive>
        }
        return _article;
    }

    getPayment_onFoot(){
        let _article = null;
        if(this.state.mode_content === 'payment' && this.state.customerType === 'OnFoot'){
          _article = <Payment_onFoot></Payment_onFoot>
        }
        return _article;
    }

    getCustomerType(){
        let _article = null;
        if(this.state.mode_content === 'customerType'){
          _article = <CustomerType></CustomerType>
        }
        return _article;
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
                {this.getCustomerType()}
                {this.getPayment_drive()}
                {this.getPayment_onFoot()}
            </div>
        )
    }
}