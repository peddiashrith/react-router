import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Shop" component={Shop} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        </div>
    );
}

function Home() {
    const navlinkstyle = {
        color: "white",
        textDecoration: "none",
    };
    return (
        <div>
            <h1>Home Page</h1>
            <p>Basic Demonstration of React Router</p>
        </div>
    );
}

export default App;
