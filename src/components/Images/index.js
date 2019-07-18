import React, { Component } from "react";
import "./style.css";
// import images from "../../images.json";

let score = 0;
let gameOver= false;
var characters = [
    "harry", "malfoy", "hermione", "snape", "neville", "tonks", "remus", "ron", "dumbledore", "luna", "madEye", "fleur"
]
var randomizedChars = characters;

console.log(randomizedChars);

class Images extends Component {

    state = {
        status: "",
        // malfoy: false,
        // neville: false,
        // hermione: false,
        // snape: false,
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
        console.log(this.state.characters);
        for (var key in this.state.characters) {
            if (this.state.characters[key] === false) {
                console.log(false); 
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

        // randomizedChars = this.shuffleArray(characters);

        if (lastRandom === randomizedChars) {
            this.randomizeCharacters();
        }

        // console.log(characters);
        // console.log(randomizedChars);
    }

    messageChange = (color) => {
        // change color to green temporarily
        document.getElementsByClassName("message")[0].style.color = color;
        setTimeout(function () {
            document.getElementsByClassName("message")[0].style.color = "#212529";
        }, 250);
    }


    winningMessage = (message) => {
        // change message to tell user they won
        this.setState({
            status: message
        });
        document.getElementsByClassName("message")[0].classList.add("winning");
    }


    userChoseImage = event => {
        console.log("clicked an image");
        // console.log(this.props);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.id);
        let character = event.target.id;
        // console.log(character)
        let score = this.props.score;

        // console.log(this.state.characters);

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
        // console.log(updatedChars);
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
            console.log("good job - new image")

            // message - guessed right
            this.setState({
                status: "Good job!"
            });

            // change color to green temporarily
            this.messageChange("green");

            // randomize image placement
            this.randomizeCharacters();
        }
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
        this.messageChange("red");
        // after message/gameover, restart game (randomize images, reset state)
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

        gameOver = true;

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
                <div className="row image-board ml-auto mr-auto">
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
