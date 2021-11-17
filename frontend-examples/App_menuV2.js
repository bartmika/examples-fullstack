import { React, Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isHamburgerNavClicked: false,
        }

        this.onNavClick = this.onNavClick.bind(this);
    }

    onNavClick(e) {
        let { isHamburgerNavClicked } = this.state;
        isHamburgerNavClicked = !isHamburgerNavClicked;
        this.setState({
            isHamburgerNavClicked: isHamburgerNavClicked,
        });
    }

    render() {
        const { isHamburgerNavClicked } = this.state;
        return (
            <>
                <div className="w3-bar w3-black w3-top">
                    <div className="w3-bar-item w3-hide-small">
                        Home
                    </div>
                    <div className="w3-bar-item w3-hide-small">
                        About
                    </div>
                    <div className="w3-bar-item w3-hide-small">
                        Contact
                    </div>
                    <div className="w3-bar-item w3-hide-large w3-hide-medium w3-right" onClick={this.onNavClick}>
                        &#9776;
                    </div>

                    <div className={`w3-bar-block w3-black ${isHamburgerNavClicked ? "w3-show" : "w3-hide"} w3-hide-large w3-hide-medium`}>
                        <div className="w3-bar-item w3-container"></div>
                        <div className="w3-bar-item">
                            Home
                        </div>
                        <div className="w3-bar-item">
                            About
                        </div>
                        <div className="w3-bar-item">
                            Contact
                        </div>
                    </div>

                </div>
                <br /><br />

                <div className="w3-container">
                    <h3>Scroll this page to see the effect.</h3>
    <p>Some text to enable scrolling..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text to enable scrolling..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text to enable scrolling..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text to enable scrolling..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
    <p>Some text some text some text some text..</p>
                </div>
            </>
        );
    }
}

export default App;
