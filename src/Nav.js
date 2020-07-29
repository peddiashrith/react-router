import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
    const navlinkstyle = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <nav>
            <h3>
                <Link style={navlinkstyle} to="/">
                    Home
                </Link>
            </h3>
            <ul className="nav-links">
                <li>
                    <Link style={navlinkstyle} to="/About">
                        About
                    </Link>
                </li>

                <li>
                    <Link style={navlinkstyle} to="/Shop">
                        Shop
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
