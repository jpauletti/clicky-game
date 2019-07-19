import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    // Setting component's initial state
    state = {
        score: 0,
        topScore: 0
    }


    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Score: {this.props.score}  |  Top Score: {this.props.topScore}</p>
                <p>Click on an image to earn points, but only click each image once.</p>
            </div>
        );
    }
}

export default Header;
