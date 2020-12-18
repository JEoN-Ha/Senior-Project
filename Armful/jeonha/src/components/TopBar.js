import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        const standardTopPosition = 25;
        const standardLeftPosition = 40;

        const idLabelInputStyle = {
            position: 'fixed',
            top: (standardTopPosition) + '%',
            left: (standardLeftPosition) +'%',
        }
        const idInputStyle = {
            position: 'fixed',
            top: (standardTopPosition) + '%',
            left: (standardLeftPosition + 12) +'%',
        }
        const pwLabelInputStyle = {
            position: 'fixed',
            top: (standardTopPosition + 5) + '%',
            left: (standardLeftPosition) +'%',
        }
        const pwInputStyle = {
            position: 'fixed',
            top: (standardTopPosition + 5) + '%',
            left: (standardLeftPosition + 12) +'%',
        }
        const submitInputStyle = {
            position: 'fixed',
            top: (standardTopPosition + 10) + '%',
            left: (standardLeftPosition + 27) +'%',
        }
      return (
        <form id="Login_Input" 
        onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit();
        }.bind(this)}>
            <div style={idLabelInputStyle}>L o g - i n : </div>

            <input 
            placeholder="Put in your ID"
            style={idInputStyle}
            ></input>

            <div style={pwLabelInputStyle}>Password : </div>

            <input 
            placeholder="Put in your Pw"
            style={pwInputStyle}
            ></input>

            <button type="submit" style={submitInputStyle}>Login</button>
        </form>
         );
    }
  }

export default TopBar;