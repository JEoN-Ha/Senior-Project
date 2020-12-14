import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return( <div className ="nav">
        <Link to = "/">Order Now</Link>
        <Link to ="/login">Login</Link>
        </div>
    );

}

export default Navigation;