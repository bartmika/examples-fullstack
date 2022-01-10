import { React, useState } from "react";
import { Link } from "react-router-dom";


function TopNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function onOpenRightMenu() {
        setIsMenuOpen(true);
    }

    function onCloseRightMenu() {
        setIsMenuOpen(false);
    }
    return(
        <>
            <div className="w3-hide-small">
                <div className="w3-bar w3-border w3-light-grey w3-top" style={{height:"40px"}}>
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
            </div>
            <div className="w3-hide-medium w3-hide-large">
                <div className="w3-top w3-light-grey" style={{height:"40px"}}>
                    <button className="w3-button w3-teal w3-right" onClick={onOpenRightMenu}>&#9776;</button>
                </div>
            </div>
            {isMenuOpen && <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display:"block", right:"0px"}} id="rightMenu">
                <button onClick={onCloseRightMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-home"></i>&nbsp;Home</a>
                <a href="/list" className="w3-bar-item w3-button"><i className="fa fa-bell"></i>&nbsp;Reminders</a>
                <a href="/about" className="w3-bar-item w3-button"><i className="fa fa-info"></i>&nbsp;About</a>
                <a href="/add" className="w3-bar-item w3-button"><i className="fa fa-plus"></i>Add</a>
            </div>}
        </>
    );
}

export default TopNavigation;
