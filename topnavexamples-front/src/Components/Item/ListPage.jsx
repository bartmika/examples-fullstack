import { React, Component } from "react";
import { Link } from "react-router-dom"

class ItemListPage extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="w3-row w3-teal" style={{width:"100%"}}>
                    <div className="w3-col s4 w3-container w3-padding">
                        <Link to="/items/search" className="w3-btn w3-left"><i class="fa fa-search"></i>&nbsp;Search</Link>
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <h4><i class="fa fa-list"></i>&nbsp;List</h4>
                    </div>
                    <div className="w3-col s4 w3-container w3-padding">
                        <Link to="/items/add" className="w3-btn w3-right"><i class="fa fa-plus"></i>&nbsp;Add</Link>
                    </div>
                </div>

                <br />
                <Link to="/item/123">Click here for detail</Link>
            </>
        )
    }
}

export default ItemListPage;
