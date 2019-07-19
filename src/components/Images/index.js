import React, { Component } from "react";
import "./style.css";

let score = 0;
let gameOver= false;
let characters = [
    "harry", "malfoy", "hermione", "snape", "neville", "tonks", "remus", "ron", "dumbledore", "luna", "madEye", "fleur"
]
let randomizedChars = characters;

class Images extends Component {

    state = {
        status: "",
        characters: {
            malfoy: false,
            neville: false,
            hermione: false,
            snape: false,
            neville: false,
            tonks: false,
            remus: false,
            ron: false,
            dumbledore: false,
            luna: false,
            madEye: false,
            fleur: false
        }
    }


    checkClickedAll = () => {
        // check to see if all characters have been clicked
        let clickedAll = false;
        // console.log(this.state.characters);
        for (var key in this.state.characters) {
            if (this.state.characters[key] === false) {
                // console.log(false); 
                console.log("not all clicked")
                return false;
            }
        }
        clickedAll = true;
        console.log("all clicked")
        return clickedAll;

    }

    randomizeCharacters = () => {
        let lastRandom = randomizedChars;
        randomizedChars = [];
        for (let i = 0; i < characters.length; i++) {
            let number = Math.floor(Math.random() * characters.length);

            while (randomizedChars.indexOf(characters[number]) > -1) {
                // console.log("regenerate")
                number = Math.floor(Math.random() * characters.length);
                // console.log(number);
            }

            if (randomizedChars.indexOf(characters[number]) === -1) {
                randomizedChars.push(characters[number]);
            }
        }

        if (lastRandom === randomizedChars) {
            this.randomizeCharacters();
        }

    }

    messageChange = (color, gameover) => {
        // change color of message
        document.getElementsByClassName("message")[0].style.color = color;
        if (!gameover) {
            // change back to black if game is still going
            setTimeout(function () {
                document.getElementsByClassName("message")[0].style.color = "#212529";
            }, 250);
        }
    }


    winningMessage = (message) => {
        // change message to tell user they won
        this.setState({
            status: message
        });
        document.getElementsByClassName("message")[0].classList.add("winning");
    }


    userChoseImage = event => {
        let character = event.target.id;

        // has this image been clicked already?
        if (this.state.characters[character]) {
            this.alreadyClicked();
        } else {
            this.firstClick(character);
        }
    }


    firstClick = (character) => {
        // set state to true
        let updatedChars = this.state.characters;
        updatedChars[character] = true;

        this.setState({
            characters: updatedChars
        });

        // increase score by one
        this.props.scoreUp();
        score++;
        // update topScore if your new score is higher
        this.props.updateTopScore(score);

        // has user clicked all the images?
        if (this.checkClickedAll()) {
            // show winning message
            this.winningMessage("YOU WON!");
        } else {
            gameOver = false;
            // console.log("good job - new image")

            // message - guessed right
            this.setState({
                status: "Good job!"
            });

            // change message color to green temporarily
            this.messageChange("green", gameOver);

            // randomize image placement
            this.randomizeCharacters();
        }
    }


    alreadyClicked = () => {
        // console.log("already clicked it")
        // reset score
        this.props.scoreReset();
        score = 0;

        // game over - message - guessed wrong
        this.setState({
            status: "You already clicked that image! Click an image to start the game again."
        });

        gameOver = true;

        // change message color to red
        this.messageChange("red", gameOver);

        // reset image clicked states
        this.setState({
            characters: {
                malfoy: false,
                neville: false,
                hermione: false,
                snape: false,
                neville: false,
                tonks: false,
                remus: false,
                ron: false,
                dumbledore: false,
                luna: false,
                madEye: false,
                fleur: false
            }
        });

        // randomize characters/images
        this.randomizeCharacters();
    }


    render() {
        return (
            <>
                <div className="row text-center mb-4">
                    <div className="col-md-12 font-weight-bold message" onChange={this.messageChange}>
                        {gameOver ? <div>GAME OVER.</div> : ""}
                        {this.state.status}
                    </div>
                </div>
                <div className="row image-board ml-auto mr-auto mb-4">
                    {randomizedChars.map(character => (
                    <div className="col-md-3 char" key={character}>
                        <div className={`image-bg ${character}`} id={character} data-clicked={this.state.characters[character]} onClick={this.userChoseImage}></div>
                    </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Images;
