import React, { Component } from 'react';
import JeonhaLogoImage from '../_img/logo.png';


class JeonhaLogo extends Component {
    render() {
        const logoStyle = {
            position: 'fixed',
            top: '2%',
            left: '5%'
        }
        return (
            <img src={JeonhaLogoImage} 
            id="LogoImage"
            style={logoStyle}></img>
        );
    }
}

export default JeonhaLogo;