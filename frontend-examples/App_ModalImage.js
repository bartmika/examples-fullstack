import { React, Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isModalShowing: false,
        };
        this.onModalOpenOrCloseClick = this.onModalOpenOrCloseClick.bind(this);
    }

    onModalOpenOrCloseClick(e) {
        console.log("Open  Modal");
        let isModalShowing = !this.state.isModalShowing;
        this.setState({
            isModalShowing: isModalShowing,
        });
    }

    render() {
        const { isModalShowing } = this.state;
        return (
            <>
            <img src="https://www.w3schools.com/w3css/img_snowtops.jpg" style={{width:"30%", cursor:"zoom-in",}} onClick={this.onModalOpenOrCloseClick} />

            <div className="w3-modal" onClick={this.onModalOpenOrCloseClick} style={{display: isModalShowing ? "block" : "none" }}>
                <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div className="w3-modal-content w3-animate-zoom">
                    <img src="https://www.w3schools.com/w3css/img_snowtops.jpg" style={{width:"100%",}} />
                </div>
            </div>

            </>
        );
    }
}

export default App;
