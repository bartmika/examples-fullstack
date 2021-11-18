import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { getGlobalState, setGlobalState } from "../Helpers/StateHelper";
import { putNote } from "../API/Note";


class NoteUpdatePage extends Component {
    constructor(props) {
        super(props);

        const globalState = getGlobalState();
        const { id, title, category, text } = globalState;

        this.state ={
            noteId: id,
            forceURL: "",
            title: title,
            category: category,
            text: text,
            isLoading: false,
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onSaveClick(e) {
        this.setState({
            isLoading: true,
        }, ()=>{
            const { noteId, title, category, text } = this.state;
            const postData = {
               id: noteId,
               title: title,
               category: category,
               text: text,
            };
            putNote(postData, this.onSuccess, this.onError, this.onDone);
        });
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    onSuccess(res) {
        // Set the global state to have a success message.
        const globalState = {
            "alertType": "success",
            "alertMsg": "The note has been updated!"
        };
        setGlobalState(globalState);

        // Redirect the user back to the retrieve page.
        const forceURL = "/" + res.data.id;
        this.setState({
            isLoading: false,
            forceURL: forceURL,
        });
    }

    onError(err) {
        this.setState({
            isLoading: false,
        });
    }

    onDone() {}

    render() {
        const { forceURL, noteId, title, category, text, isLoading } = this.state;
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

                <h1 className="w3-margin-left"><strong><i className="fa fa-pencil"></i> Update</strong></h1>
                <p className="w3-margin-left">Please fill out all the required fields that have the astricks (*) character</p>
                <form className="w3-container">
                    <p>
                    <label>Title (*)</label>
                    <input className="w3-input" name="title" type="text" placeholder="Enter title" value={title} onChange={this.onTextChange} /></p>
                    <p>
                    <label>Category (*)</label>
                    <input className="w3-input" name="category" type="text" placeholder="Enter category" value={category} onChange={this.onTextChange} /></p>
                    <p>
                    <label>Text (*)</label>
                    <textarea className="w3-input" name="text" rows={8} placeholder="Enter text message of the note" value={text} onChange={this.onTextChange} ></textarea>
                    </p>

                </form>

                <div className="w3-bottom w3-padding">
                    <button onClick={this.onSaveClick} className="w3-btn w3-green w3-block w3-round-large" disabled={isLoading===true}>Save</button>
                    <Link to={`/${noteId}`} className="w3-margin-top w3-btn w3-red w3-block w3-round-large">Cancel</Link>
                </div>
            </>
        );
    }
}

export default NoteUpdatePage;
