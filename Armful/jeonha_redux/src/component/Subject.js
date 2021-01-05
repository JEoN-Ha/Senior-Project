import React, { Component } from 'react';
import styled from 'styled-components';
import "./Component.css";

class Subject extends Component {   //Subject라는 태그를 생성
    state = {title:'JEoN-Ha'}
    render() {
      const titleStyle = {
        position : 'fixed',
        top : 0,
        left : 20
      }
      return (
        <Title style={titleStyle}>
          <h1 className="MainTitle">{this.state.title}</h1>
        </Title>
      );
    }
    
  }

  const Title = styled.header`
 
  `

  export default Subject;