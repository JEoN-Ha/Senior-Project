import React, {Component} from 'react';
import './JeonhaNav.css'

class JeonhaNav extends Component {
    render() {
        // console.log(this.props.position);
        const navStyle={
            top: '6%',
            left: this.props.position + '%',
            position: 'fixed',
            // fontSize: '16px',
            fontWeight: 'bold'
            
        }
        return (
            <div style={navStyle}>{this.props.text}</div>
            
        );
    }
}

export default JeonhaNav;