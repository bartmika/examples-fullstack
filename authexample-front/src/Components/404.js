import { React, Component } from "react";


class NotFoundPage extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return (
            <>
                <h1>404 - Page does not exist</h1>
            </>
        );
    }
}

export default NotFoundPage;
