import { React, Component } from "react";
import { Link } from "react-router-dom";
import { attachTokenToAxios } from "../Utilities/Axios";
import { getProfile } from "../API/Account";


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wasAuthorized: false,
            isLoading: true,
            email: "",
            username: "",
            firstName: "",
            lastName: "",
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    componentDidMount() {
        attachTokenToAxios();
        getProfile(this.onSuccess, this.onError, this.onDone);
    }

    onSuccess(res) {
        this.setState({
            isLoading: false,
            wasAuthorized: true,
            email: res.data["email"],
            username: res.data["username"],
            firstName: res.data["firstName"],
            lastName: res.data["lastName"]
        })
    }

    onError(err) {
        this.setState({
            isLoading: false,
            wasAuthorized: false,
        })
    }

    onDone() {}

    render() {
        const { wasAuthorized, isLoading, email, username, lastName, firstName } = this.state;

        if (wasAuthorized === false && isLoading === false) {
            return (
                <>
                    <div className="w3-container">
                        <h1>Unauthorized</h1>
                        <p>Please login before accessing this page.</p>
                        <p>Click <Link to="/">here</Link> to login.</p>
                    </div>
                </>
            );
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

                    {isLoading &&<div class="w3-panel w3-blue">
                          <h3><i className="fa fa-spinner w3-spin"></i> Loading</h3>
                          <p>Retrieving data from server, please wait.</p>
                    </div>}

                    <br />

                    <div className="w3-white w3-border w3-card-4 w3-margin">
                        <div className="w3-blue w3-container">
                            <h1><strong>Profile</strong></h1>
                        </div>
                        <form className="w3-container">
                            <p>
                                <label>Email</label>
                                <input className="w3-input" type="text" value={email} />
                            </p>
                            <p>
                                <label>Username</label>
                                <input className="w3-input" type="text" value={username} />
                            </p>
                            <p>
                                <label>First Name</label>
                                <input className="w3-input" type="text" value={firstName}  />
                            </p>
                            <p>
                                <label>Last Name</label>
                                <input className="w3-input" type="text" value={lastName}  />
                            </p>
                            <p>
                                <button className="w3-button w3-block w3-pale-blue w3-border">Logout</button>
                            </p>
                        </form>

                    </div>
                </div>

            </>
        )
    }
}


export default ProfilePage;
