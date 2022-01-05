import { React } from "react";
import { Link } from "react-router-dom";


function TopNavigation() {
    return(
        <>
            <div class="w3-bar w3-border w3-light-grey w3-top" style={{height:"40px"}}>
                <Link className="w3-bar-item w3-button" to="/">
                    <i className="fa fa-home"></i>&nbsp;Home
                </Link>
                <Link className="w3-bar-item w3-button" to="/list">
                    <i className="fa fa-bell"></i>&nbsp;Reminders</Link>
                <Link className="w3-bar-item w3-button" to="/about">
                    <i className="fa fa-info"></i>&nbsp;About</Link>
                <Link className="w3-bar-item w3-button w3-green w3-right" to="/add">
                    <i className="fa fa-plus"></i>
                </Link>
            </div>
        </>
    );
}

export default TopNavigation;
