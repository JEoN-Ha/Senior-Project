import React, {Component} from 'react';
import LoginContent from '../containers/LoginContent';

export default class LoginRoot extends Component {
    state = {
        mode1:'login'
    }

    getLogin(){
        let _article = null;
        if(this.state.mode1 === 'login'){
          _article = <LoginContent></LoginContent>}
        // } else if(this.state.mode1 === 'readCustomer'){
        //   let _data = this.getReadCustomer();
        //   _article = <ReadCustomer ID={_data.ID}></ReadCustomer>
        // }
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