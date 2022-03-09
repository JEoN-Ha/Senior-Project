import React, {Component} from 'react';

class JeonhaNav extends Component {
    render() {
        // console.log(this.props.position);
        const navStyle={
            top: '10%',
            left: this.props.position + '%',
            position: 'fixed',
            // fontSize: '16px',
            fontWeight: 'bold'
            
        }
        return (
            <div style={navStyle}>{this.props.desc}</div>
            
        );
    }
}

export default JeonhaNav;