import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function MobileTabletNavContainer(props) {
    const location = useLocation();
    const paths = location.pathname.split("/")
    const basePath = paths[1];

    const [isMoreClicked, setIsMoreClicked] = useState(false);

    return (
        <>
            {isMoreClicked && <div className="w3-sidebar w3-bar-block w3-card" style={{top: "65%", width:"50%", right: "0"}}>
                <h3 className="w3-bar-item">Menu</h3>
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
            </div>}

            <div className="w3-bottom w3-black w3-bar w3-xlarge">
                <div className="w3-bar-item w3-center" style={{width:"25%"}}>
                    <Link to="/dashboard">
                        <i className={`fa fa-tachometer ${basePath === "dashboard" && !isMoreClicked ? "w3-text-blue" : ""}`}></i>
                    </Link>
                </div>
                <div className="w3-bar-item w3-center" style={{width:"25%"}}>
                    <Link to="/books">
                        <i className={`fa fa-book ${basePath === "books" && !isMoreClicked ? "w3-text-blue" : ""}`}></i>
                    </Link>
                </div>
                <div className="w3-bar-item w3-center" style={{width:"25%"}}>
                    <Link to="/music">
                        <i className={`fa fa-music ${basePath === "music" && !isMoreClicked ? "w3-text-blue" : ""}`}></i>
                    </Link>
                </div>
                <div className="w3-bar-item w3-center" style={{width:"25%"}}>
                    <div onClick={ ()=> setIsMoreClicked(!isMoreClicked) }>
                        <i className={`fa fa-ellipsis-h ${isMoreClicked === true ? "w3-text-blue" : ""}`}></i>
                    </div>
                </div>
            </div>
        </>
    )
}
