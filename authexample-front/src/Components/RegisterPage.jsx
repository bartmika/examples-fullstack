import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { postRegister } from "../API/Gateway";


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            forceURL: "",
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    onClick(e) {
        const { username, password, firstName, lastName } = this.state;
        const postData = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        };
        postRegister(postData, this.onSuccess, this.onError, this.onDone);
    }

    onSuccess(res) {
        this.setState({
            forceURL: "/register-success",
        });
    }

    onError(err) {

    }

    onDone() {}

    render() {
        const { username, password, firstName, lastName, forceURL } = this.state;

        if (forceURL != "") {
            return <Navigate to={forceURL} />;
        }
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
                            <h1><strong>Register</strong></h1>
                        </div>
                        <form className="w3-container">
                            <p>
                                <label>Username</label>
                                <input className="w3-input" type="text" name="username" value={username} onChange={this.onTextChange} />
                            </p>
                            <p>
                                <label>Password</label>
                                <input className="w3-input" type="password" name="password" value={password} onChange={this.onTextChange} />
                            </p>
                            <p>
                                <label>First Name</label>
                                <input className="w3-input" type="text" name="firstName" value={firstName} onChange={this.onTextChange} />
                            </p>
                            <p>
                                <label>Last Name</label>
                                <input className="w3-input" type="text" name="lastName" value={lastName} onChange={this.onTextChange} />
                            </p>
                            <p>
                                <button type="button" onClick={this.onClick} className="w3-button w3-block w3-pale-blue w3-border">Submit</button>
                            </p>
                            <p>
                                Already have an account? <Link to="/">Click here to login</Link>
                            </p>
                        </form>

                    </div>
                </div>

            </>
        )
    }
}


export default RegisterPage;
