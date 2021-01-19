import React, { Component} from 'react';
import "./Component.css";

class LoginContent extends Component {
    state = {
        customer_id:null,
        PW:null
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    
    render() {
      const btnStyle = {
        color: "white",
        background: "#815854",
        margin: "10px",
        border: "1px solid #815854",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        width: "230px"
      }
      return (
          <article className="Login">
            <text className="basicText">로그인</text>
            <input type="text" name="customer_id" placeholder="ID"
              size = "30"
              customer_id={this.state.customer_id}
              onChange={function(e){
                  this.setState({customer_id:e.target.value});
              }.bind(this)}></input>
            <input type="text" name="PW" placeholder="Password"
              size = "30"
              PW={this.state.PW}
              onChange={function(e){
                  this.setState({PW:e.target.value});
              }.bind(this)}></input>
            <input style={btnStyle} 
              type="button" value="LOGIN" onClick={function(){
              this.props.onClick(this.state.customer_id,this.state.PW);
              alert('로그인이 완료됐습니다.');
          }.bind(this)}></input>
          </article>
      );
    }
  }

  export default LoginContent;