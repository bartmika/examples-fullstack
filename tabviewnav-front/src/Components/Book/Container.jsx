import { React, Component } from "react";
import BookComponent from "./Component";


class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <BookComponent />
            </>
        )
    }
}

export default BookContainer;
