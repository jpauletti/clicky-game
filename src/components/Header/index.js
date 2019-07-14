import React, { Component } from "react";
import "./style.css";

class Header extends Component {
    // Setting component's initial state
    state = {
        score: 0,
        topScore: 0
    }
    // state = {
    //     firstName: "",
    //     lastName: ""
    // };

    // handleInputChange = event => {
    //     // Getting the value and name of the input which triggered the change
    //     const { name, value } = event.target;

    //     // Updating the input's state
    //     this.setState({
    //         // [name] = whatever the name is ("firstName" or "lastName")
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();

    //     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    //     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    //     this.setState({
    //         firstName: "",
    //         lastName: ""
    //     });
    // };

    render() {
        return (
            // <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //     <a class="navbar-brand" href="#">Clicky Game</a>
            //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span class="navbar-toggler-icon"></span>
            //     </button>

            //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul class="navbar-nav mr-auto">
            //             <li class="nav-item active">
            //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            //             </li>
            //             <li class="nav-item">
            //                 <a class="nav-link" href="#">Link</a>
            //             </li>

            //         </ul>

            //     </div>
            // </nav>

                <div className="jumbotron text-center">
                    <h1 className="display-4">Clicky Game</h1>
                    <p className="lead">Score: {this.state.score}  //  Top Score: {this.state.topScore}</p>
                    <p>Click on an image to earn points, but only click each image once.</p>
                </div>
            








            // <div>
            //     <p>
            //         Hello {this.state.firstName} {this.state.lastName}
            //     </p>
            //     <form className="form">
            //         <input
            //             value={this.state.firstName}
            //             name="firstName"
            //             onChange={this.handleInputChange}
            //             type="text"
            //             placeholder="First Name"
            //         />
            //         <input
            //             value={this.state.lastName}
            //             name="lastName"
            //             onChange={this.handleInputChange}
            //             type="text"
            //             placeholder="Last Name"
            //         />
            //         <button onClick={this.handleFormSubmit}>Submit</button>
            //     </form>
            // </div>
        );
    }
}

export default Header;
