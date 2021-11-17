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
                <button onClick={this.onModalOpenOrCloseClick}>Open Modal</button>
                <div className="w3-modal" style={{ display : isModalShowing ? "block" : "none", }}>
                    <div className="w3-modal-content w3-card-4 w3-animate-opacity">
                        <header className="w3-container w3-red">
                            <span onClick={this.onModalOpenOrCloseClick} >&times;</span>
                            <h2>Warning</h2>
                        </header>
                        <article className="w3-container">
                            <p>Some text in the Modal..</p>
                            <p>Some text in the Modal..</p>
                        </article>
                        <footer className="w3-container w3-red">
                            <p>You havebeen warned</p>
                        </footer>

                    </div>
                </div>

            </>
        );
    }
}

export default App;
