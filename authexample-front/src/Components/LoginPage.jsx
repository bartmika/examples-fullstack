import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { postLogin } from "../API/Gateway";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            forceURL: "",
        }
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onSuccess(res) {
        const key = res.data["token"];
        localStorage.setItem("APP_API_KEY", key);
        this.setState({
            forceURL: "/profile",
        });
    }

    onError(err) {

    }

    onDone() {}

    onLoginClick(e) {
        console.log("onLoginClick|Clicked");
        const { password, username } = this.state;
        const postData = {
            username: username,
            password: password,
        };
        postLogin(postData, this.onSuccess, this.onError, this.onDone);
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { username, password, forceURL } = this.state;
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
                            <h1><strong>Login</strong></h1>
                        </div>
                        <form className="w3-container">
                            <p>
                                <label>Username</label>
                                <input className="w3-input" type="text" name="username" onChange={this.onTextChange} value={username} />
                            </p>
                            <p>
                                <label>Password</label>
                                <input className="w3-input" type="password" name="password" onChange={this.onTextChange} value={password} />
                            </p>
                            <p>
                                <button type="button" onClick={this.onLoginClick} className="w3-button w3-block w3-pale-blue w3-border">Login</button>
                            </p>
                            <p>
                                Don't have an account? <Link to="/register">Click here to register</Link>
                            </p>
                        </form>

                    </div>
                </div>

            </>
        )
    }
}


export default LoginPage;
