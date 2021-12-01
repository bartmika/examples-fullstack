import { React, Component } from "react";
import { Link } from "react-router-dom";

class ItemDetailPage extends Component{
    constructor(props) {
        super(props);

        const location = window.location.href;
        const locationsArr = location.split("/");
        const id = locationsArr[locationsArr.length-1];
        console.log(id);

        // Here you extract the 'id'.
        this.state = {
            id: id,
        }
    }

    render() {
        const { id } = this.state;
        return (
            <>
                <div className="w3-row w3-teal" style={{width:"100%"}}>
                    <div className="w3-col s4 w3-container w3-padding">
                        <Link to="/items" className="w3-btn w3-left"><i class="fa fa-chevron-left"></i>&nbsp;Back</Link>
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <h4><i class="fa fa-info-circle"></i>&nbsp;Details</h4>
                    </div>
                    <div className="w3-col s4 w3-container w3-padding">

                    </div>
                </div>

                <h1>Record #{id}</h1>
            </>
        )
    }
}

export default ItemDetailPage;
