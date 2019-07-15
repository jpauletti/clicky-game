import React, { Component } from "react";
import "./style.css";
// import images from "../../images.json";

let score = 0;
let gameOver= false;
var characters = [
    "hermione", "snape", "neville", "malfoy"
]
var randomizedChars = [
    "hermione", "snape", "neville", "malfoy"
];

console.log(randomizedChars);

class Images extends Component {

    shuffleArray = array => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }


    checkClickedAll = () => {
        // check to see if all characters have been clicked
        let clickedAll = false;
        for (var key in this.state.characters) {
            if (this.state.characters[key] === false) {
                console.log(false); 
                return false;
            }
        }
        clickedAll = true;
        return clickedAll;

    }

    randomizeCharacters = () => {
        let lastRandom = randomizedChars;
        randomizedChars = [];
        for (let i = 0; i < characters.length; i++) {
            let number = Math.floor(Math.random() * characters.length);

            while (randomizedChars.indexOf(characters[number]) > -1) {
                console.log("regenerate")
                number = Math.floor(Math.random() * characters.length);
                console.log(number);
            }

            if (randomizedChars.indexOf(characters[number]) === -1) {
                randomizedChars.push(characters[number]);
            }
        }

        // randomizedChars = this.shuffleArray(characters);

        if (lastRandom === randomizedChars) {
            this.randomizeCharacters();
        }

        console.log(characters);
        console.log(randomizedChars);
    }

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
            this.alreadyClicked();

        } else {
            this.firstClick(character);

        }

    }


    firstClick = (character) => {
        gameOver = false;
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
        setTimeout(function () {
            document.getElementsByClassName("message")[0].style.color = "#212529";
        }, 250);

        // randomize image placement
    }


    alreadyClicked = () => {
        console.log("already clicked it")
        // update score
        this.props.scoreReset();
        score = 0;

        // game over - message - guessed wrong
        this.setState({
            status: "You already clicked that image! Click an image to start the game again."
        });
        // change color to red temporarily
        document.getElementsByClassName("message")[0].style.color = "red";
        setTimeout(function () {
            document.getElementsByClassName("message")[0].style.color = "#212529";
        }, 250);
        // after message/gameover, restart game (randomize images, reset state)
        // reset image clicked states
        this.setState({
            malfoy: false,
            neville: false,
            hermione: false,
            snape: false
        });

        gameOver = true;

        // randomize characters/images
        this.randomizeCharacters();
    }

    state = {
        status: "",
        malfoy: false,
        neville: false,
        hermione: false,
        snape: false
    }

    render() {
        return (
            <>
                <div className="row text-center mb-5">
                    <div className="col-md-12 font-weight-bold message">
                        {gameOver ? "GAME OVER." : ""}<br/>
                        {this.state.status}
                    </div>
                </div>
                <div className="row">
                    {randomizedChars.map(character => (
                    <div className="col-md-3" key={character}>
                        <div className={`image-bg ${character}`} id={character} data-clicked={this.state[character]} onClick={this.userChoseImage}></div>
                    </div>
                    ))}
                    {/* <div className="col-md-3">
                        <div className="image-bg malfoy" id="malfoy" data-clicked={this.state.malfoy} onClick={this.userChoseImage}></div>
                    </div>

                    <div className="col-md-3">
                        <div className="image-bg neville" id="neville" data-clicked={this.state.neville} onClick={this.userChoseImage}></div>
                    </div>

                    <div className="col-md-3">
                        <div className="image-bg hermione" id="hermione" data-clicked={this.state.hermione} onClick={this.userChoseImage}></div>
                    </div>

                    <div className="col-md-3">
                        <div className="image-bg snape" id="snape" data-clicked={this.state.snape} onClick={this.userChoseImage}></div>
                    </div> */}

                </div>
            </>
        );
    }
}

export default Images;
