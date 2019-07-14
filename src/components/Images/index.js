import React, { Component } from "react";
import "./style.css";
// import images from "../../images.json";

let score = 0;
let startingScore = 0;

class Images extends Component {
    userChoseImage = event => {
        console.log("clicked an image");
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);

        var character = event.target.id;

        // has this image been clicked already?
        if (this.state[character]) {
            console.log("already clicked it")
            // update score
            score = 0;
            // game over - message - guessed wrong
            // after message/gameover, restart game (randomize images, reset state)
        } else {
            console.log("good job - new image")
            // set state to true
            this.setState({
                [character]: true
            });
        }
            // if yes
                // update score
                // game over - message - guessed wrong
                // after message/gameover, restart game (randomize images, reset state)
            // if no
                // update state to true
                // update score
                // message - guessed correctly
                // randomize images
    }

    state = {
        draco: false,
        neville: false,
        hermione: false,
        snape: false
    }

    render() {
        return (
            <div className="row">
                {/* {images.map(image => (
                    <div class="col-md-4 image-bg">
                        <img class="image-bg img-fluid" src={image} />
                    </div>
                ))} */}
                <div className="col-md-3">
                    <div className="image-bg malfoy" id="malfoy" data-clicked={this.state.malfoy} onClick={this.userChoseImage}></div>
                    {/* <img class="image-bg img-fluid" src={require("../../images/draco-malfoy.jpg")} /> */}
                </div>

                <div className="col-md-3">
                    <div className="image-bg neville" id="neville" data-clicked={this.state.neville} onClick={this.userChoseImage}></div>
                    {/* <img class="image-bg img-fluid" src={require("../../images/neville-longbottom.jpg")} /> */}
                </div>

                <div className="col-md-3">
                    <div className="image-bg hermione" id="hermione" data-clicked={this.state.hermione} onClick={this.userChoseImage}></div>
                    {/* <img class="image-bg img-fluid" src={require("../../images/hermione-granger.jpg")} /> */}
                </div>

                <div className="col-md-3">
                    <div className="image-bg snape" id="snape" data-clicked={this.state.snape} onClick={this.userChoseImage}></div>
                    {/* <img class="image-bg img-fluid" src={require("../../images/hermione-granger.jpg")} /> */}
                </div>

            </div>
        );
    }
}

export default Images;
