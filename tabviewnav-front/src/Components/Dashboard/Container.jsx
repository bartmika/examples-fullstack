import { React, Component } from "react";
import DashboardComponent from "./Component";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <DashboardComponent />
            </>
        )
    }
}

export default DashboardContainer;
