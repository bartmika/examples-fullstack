import { React, Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <>
                <div className="w3-bar w3-black">
                    <div className="w3-bar-item w3-btn w3-mobile">Home</div>
                    <div className="w3-bar-item w3-btn w3-mobile">About</div>
                </div>
            </>
        );
    }
}

export default App;
