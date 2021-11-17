import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { setGlobalState } from "../Helpers/StateHelper";


class NoteDeletePage extends Component {
    constructor(props) {
        super(props);

        // Special thanks to link via https://stackoverflow.com/a/3730376
        var stuff = window.location.pathname.split('/');
        var id = stuff[1];

        this.state ={
            noteId: id,
            forceURL: "",
        }
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(e) {
        const globalState = {
            "alertType": "success",
            "alertMsg": "The note has been deleted!"
        };
        setGlobalState(globalState);

        this.setState({
            forceURL: "/",
        })
    }

    render() {
        const { noteId, forceURL } = this.state;
        if (forceURL !== "") {
            return <Navigate to={forceURL} />;
        }
        return (
            <>
                <div className="w3-ios-deep-blue w3-display-container" style={{height:"50px"}}>
                    <div className="w3-display-left">
                        <Link to={`/${noteId}`} className="w3-btn">&#10094; Back</Link>
                    </div>
                    <div className="w3-display-middle">
                    </div>
                    <div className="w3-display-right w3-padding">

                    </div>
                </div>

                <h1 className="w3-margin-left"><strong><i className="fa fa-trash"></i> Delete</strong></h1>

                <div className="w3-padding">
                    <p>Are you sure you want to delete this note?</p>
                </div>

                <div className="w3-bottom w3-padding">
                    <button onClick={this.onDeleteClick} className="w3-btn w3-green w3-block w3-round-large">Delete</button>
                    <Link to={`/${noteId}`} className="w3-margin-top w3-btn w3-red w3-block w3-round-large">Cancel</Link>
                </div>
            </>
        );
    }
}

export default NoteDeletePage;
