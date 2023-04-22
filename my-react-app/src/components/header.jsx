import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <ul>
                <div>
                    <Link to="/Matches">Matches</Link>
                    <b> </b>
                    <Link to="/Profile">Profile</Link>
                    <b> </b>
                    <Link to="/Landing">Landing</Link>
                    <b> </b>
                    <Link to="/">Login Page</Link>
                </div>
            </ul>
        </nav>
    );
}

export default Header;
