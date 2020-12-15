import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state = {    // 기존 정보를 불러옴
        id:this.props.data.id,  //data의 id
        ID:this.props.data.title, //사용자의 ID
        PW:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }

    render() {
      return (
          <article>
              <h2>Update</h2>
              <form action="/login_process" method="post"
                onSubmit={function (e) {
                  e.preventDefault();
                  this.props.onSubmit(
                    this.state.id,
                    this.state.ID,
                    this.state.PW
                  );
                  alert('로그인이 완료됐습니다.');
                }.bind(this)}>
                
                <input type="hidden" name="id" value={this.state.id}></input>
                <p><input 
                  type="text" 
                  name="ID" 
                  placeholder="ID"
                  value={this.state.ID}
                  onChange={this.inputFormHandler}
                ></input></p>
                <p><input 
                  type="text" 
                  name="PW" 
                  placeholder="Password"
                  value={this.state.PW}
                  onChange={this.inputFormHandler}
                  ></input><input type="submit"></input></p>
              </form>
          </article>
      );
    }
  }

  export default UpdateContent;