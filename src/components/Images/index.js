import React, { Component } from "react";
import "./style.css";
import images from "../../images.json";

// const images = [
//     "../../images/draco-malfoy.jpg"
// ]

class Images extends Component {
    randomizeImages = images => {

    }

    render() {
        return (
            <div class="row">
                {/* {images.map(image => (
                    <div class="col-md-4 image-bg">
                        <img class="image-bg img-fluid" src={image} />
                    </div>
                ))} */}
                <div class="col-md-4 image-bg">
                    <img class="image-bg img-fluid" src={require("../../images/draco-malfoy.jpg")} />
                </div>

                <div class="col-md-4 image-bg">
                    <img class="image-bg img-fluid" src={require("../../images/neville-longbottom.jpg")} />
                </div>

                <div class="col-md-4 image-bg">
                    <img class="image-bg img-fluid" src={require("../../images/hermione-granger.jpg")} />
                </div>

            </div>
        );
    }
}

export default Images;
