import { React, Component } from "react";
import { Link } from "react-router-dom";

class AddItemPage extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="w3-row w3-teal" style={{width:"100%"}}>
                    <div className="w3-col s4 w3-container w3-padding">
                        <Link to="/items" className="w3-btn w3-left"><i class="fa fa-chevron-left"></i>&nbsp;Back</Link>
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <h4><i class="fa fa-search"></i>&nbsp;Search</h4>
                    </div>
                    <div className="w3-col s4 w3-container w3-padding">

                    </div>
                </div>
            </>
        )
    }
}

export default AddItemPage;
