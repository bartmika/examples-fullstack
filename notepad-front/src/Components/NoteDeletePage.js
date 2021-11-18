import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { setGlobalState } from "../Helpers/StateHelper";
import { deleteNote } from "../API/Note";


class NoteDeletePage extends Component {
    constructor(props) {
        super(props);

        // Special thanks to link via https://stackoverflow.com/a/3730376
        var stuff = window.location.pathname.split('/');
        var id = stuff[1];

        this.state ={
            noteId: id,
            forceURL: "",
            isLoading: false,
        }
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onDeleteClick(e) {
        this.setState({
            isLoading: true,
        },()=>{
            deleteNote(this.state.noteId, this.onSuccess, this.onError, this.onDone);
        });
    }

    onSuccess(res) {
        const globalState = {
            "alertType": "success",
            "alertMsg": "The note has been deleted!"
        };
        setGlobalState(globalState);

        this.setState({
            isLoading: false,
            forceURL: "/",
        });
    }

    onError(err) {
        this.setState({
            isLoading: false,
        });
    }

    onDone() {}

    render() {
        const { noteId, forceURL, isLoading } = this.state;
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

                {isLoading && <div class="w3-panel w3-blue">
                      <h3><i className="fa fa-spinner w3-spin"></i> Loading</h3>
                      <p>Retrieving data from server, please wait.</p>
                </div>}

                <h1 className="w3-margin-left"><strong><i className="fa fa-trash"></i> Delete</strong></h1>

                <div className="w3-padding">
                    <p>Are you sure you want to delete this note?</p>
                </div>

                <div className="w3-bottom w3-padding">
                    <button onClick={this.onDeleteClick} className="w3-btn w3-green w3-block w3-round-large" disabled={isLoading===true}>Delete</button>
                    <Link to={`/${noteId}`} className="w3-margin-top w3-btn w3-red w3-block w3-round-large">Cancel</Link>
                </div>
            </>
        );
    }
}

export default NoteDeletePage;
