import React, { Component } from "react";
import "./style.css";
// import images from "../../images.json";

let score = 0;
let topScore = 0;
let startingScore = 0;

class Images extends Component {
    userChoseImage = event => {
        console.log("clicked an image");
        console.log(this.props);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.id);
        let character = event.target.id;
        let score = this.props.score;

        // has this image been clicked already?
        if (this.state[character]) {
            console.log("already clicked it")
            // update score
            this.props.scoreReset();
            score = 0;

            // game over - message - guessed wrong
            this.setState({
                status: "You already clicked that image! Game over."
            });
            // change color to red temporarily
            document.getElementsByClassName("message")[0].style.color = "red";
            setTimeout(function () {
                document.getElementsByClassName("message")[0].style.color = "#212529";
            }, 250);
            // after message/gameover, restart game (randomize images, reset state)

        } else {
            console.log("good job - new image")
            // set state to true
            this.setState({
                [character]: true
            });

            // increase score by one
            this.props.scoreUp();
            score++;
            // update topScore if your new score is higher
            this.props.updateTopScore(score);

            // message - guessed right
            this.setState({
                status: "Good job!"
            });

            // change color to green temporarily
            document.getElementsByClassName("message")[0].style.color = "green";
            setTimeout(function() {
                document.getElementsByClassName("message")[0].style.color = "#212529";
            }, 250);

            // randomize image placement

        }

    }

    state = {
        status: "",
        draco: false,
        neville: false,
        hermione: false,
        snape: false
    }

    render() {
        return (
            <>
                <div className="row text-center mb-5">
                    <div className="col-md-12 font-weight-bold message">
                        {this.state.status}
                    </div>
                </div>
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
            </>
        );
    }
}

export default Images;
