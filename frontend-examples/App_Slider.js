import { React, Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureIndex: 0,
            pictures: [
                "https://www.w3schools.com/w3css/img_snowtops.jpg",   // pictureIndex = 0
                "https://www.w3schools.com/w3css/img_lights.jpg",     // pictureIndex = 1
                "https://www.w3schools.com/w3css/img_mountains.jpg",  // pictureIndex = 2
                "https://www.w3schools.com/w3css/img_forest.jpg",     // pictureIndex = 3
            ],
        };
        this.onSliderLeftClick = this.onSliderLeftClick.bind(this);
        this.onSliderRightClick = this.onSliderRightClick.bind(this);
    }

    onSliderLeftClick(e) {
        console.log("Left");
        let { pictures, pictureIndex } = this.state;

        // Move the slider to the left.
        pictureIndex = pictureIndex - 1;

        // Defensive code.
        if (pictureIndex < 0) {
            pictureIndex = pictures.length - 1;
        }

        // Update our GUI.
        this.setState({
            pictureIndex: pictureIndex,
        });
    }

    onSliderRightClick(e) {
        console.log("Right");
        let { pictures, pictureIndex } = this.state;

        // Move the slider to the right.
        pictureIndex = pictureIndex + 1;

        // Defensive code.
        if (pictureIndex >= pictures.length) {
            pictureIndex = 0;
        }

        // Save our new index to the state of the react app.
        this.setState({
            pictureIndex: pictureIndex,
        });
    }

    render() {
        const  { pictures, pictureIndex } = this.state;

        let pictureElements = [];

        for (let i = 0; i < pictures.length; i++) {
            let pictureUrl = pictures[i];

            let jsxElement;
            if (pictureIndex === i) {
                jsxElement = <img src={pictureUrl} style={{width:"100%", display:"block"}} />;
            } else {
                jsxElement = <img src={pictureUrl} style={{width:"100%", display:"none"}} />;
            }
            pictureElements.push(jsxElement);
        }

        return (
            <>
            <div className="w3-display-container" style={{maxWidth: "1200px"}}>
                {pictureElements}
                <button className="w3-button w3-black w3-display-left" onClick={this.onSliderLeftClick}>&#10094;</button>
                <button className="w3-button w3-black w3-display-right" onClick={this.onSliderRightClick}>&#10095;</button>
            </div>
            </>
        );
    }
}

export default App;
