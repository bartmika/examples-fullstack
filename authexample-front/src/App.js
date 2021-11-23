import { React, Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import ProfilePage from "./Components/ProfilePage";
import RegisterPage from "./Components/RegisterPage";
import RegisterSuccessPage from "./Components/RegisterSuccessPage";
import NotFoundPage from "./Components/404";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route exact path="/register-success" element={<RegisterSuccessPage/>}/>
                        <Route exact path="/register" element={<RegisterPage/>}/>
                        <Route exact path="/profile" element={<ProfilePage/>}/>
                        <Route exact path="/" element={<LoginPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

export default App;
