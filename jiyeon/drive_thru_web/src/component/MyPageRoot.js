import React, {Component} from 'react';
import store from '../store';
import PaymentHistory from './PaymentHistory';

export default class MyPageRoot extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getMyInfo(){
        let _article = null;
        if(this.state.mode_content === 'MyInfo'){
        //   _article = <CustomerType></CustomerType>
        }
        return _article;
    }

    getPaymentHistory(){
        let _article = null;
        if(this.state.mode_content === 'Payment_History'){
          _article = <PaymentHistory></PaymentHistory>
        }
        return _article;
    }

    render() {
        return (
            <div>
                {this.getMyInfo()}
                {this.getPaymentHistory()}
            </div>
        )
    }
}