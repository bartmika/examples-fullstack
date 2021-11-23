import { React, Component } from "react";
import { Link } from "react-router-dom";


class RegisterSuccessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="w3-hide-small">
                    <h1>Unsupported Device</h1>
                    <p>This app only supports mobile device screen sizes. Thank you</p>
                </div>
                <div className="w3-hide-medium w3-hide-large w3-light-grey">
                    <div className="w3-blue w3-container" style={{height:"80px",}}>
                    </div>

                    <br />

                    <div className="w3-white w3-border w3-card-4 w3-margin">
                        <div className="w3-blue w3-container">
                            <h1><strong>Success!</strong></h1>
                        </div>
                        <form className="w3-container">
                            <p>
                                You have successfully registered!
                            </p>
                            <p>
                                <Link to="/">Click here to login with your credentials</Link>
                            </p>
                        </form>

                    </div>
                </div>

            </>
        )
    }
}


export default RegisterSuccessPage;
