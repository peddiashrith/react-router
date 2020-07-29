import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import CatDetail from "./CatDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Shop" component={Shop} />
                    <Route path="/Shop/:id" component={CatDetail} />
                    <Route path="/About" component={About} />
                </Switch>
            </Router>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Basic Demonstration of React Router</p>
        </div>
    );
}

export default App;
