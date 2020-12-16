import React, { Component } from 'react';
import JeonhaLogoImage from '../_img/logo.png';


class JeonhaLogo extends Component {
    render() {
        const logoSize = 8;
        const logoStyle = {
            position: 'fixed',
            top: '5%',
            left: '3%',
            width: logoSize + '%',
            heigth: logoSize + '%'
        }
        return (
            <img src={JeonhaLogoImage} 
            id="LogoImage"
            style={logoStyle}></img>
        );
    }
}

export default JeonhaLogo;