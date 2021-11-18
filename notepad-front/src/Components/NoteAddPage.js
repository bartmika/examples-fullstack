import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { postNote } from "../API/Note";

class NoteAddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forceURL: "",
            title: "",
            category: "",
            text: "",
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    onSaveClick(e) {
        const { title, category, text } = this.state;
        const data = {
            title: title,
            category: category,
            text: text,
        };
        postNote(data, this.onSuccess, this.onError, this.onDone);
    }

    onSuccess(response) {
        const { id } = response.data;
        this.setState({
            forceURL: "/" + id,
        });
    }

    onError(err){

    }

    onDone() {

    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { forceURL, title, category, text } = this.state;
        if (forceURL !== "") {
            return <Navigate to={forceURL} />;
        }

        return (
            <>
                <div className="w3-container w3-ios-deep-blue">
                    <div className="w3-display-container" style={{height:"50px"}}>
                        <div className="w3-display-left">
                            <Link to="/" className="w3-btn">&#10094; Back</Link>
                        </div>
                        <div className="w3-display-middle w3-center">

                        </div>
                        <div className="w3-display-right">
                        </div>
                    </div>
                </div>
                <div>
                <div className="w3-container">
                   <h2><i className="fa fa-plus-circle"></i> Add Note</h2>
                   <p>Please fill out all the required fields that have the astricks (*) character</p>
                </div>
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
                    <button onClick={this.onSaveClick} className="w3-btn w3-green w3-block w3-round-large">Save</button>
                    <Link to="/" className="w3-margin-top w3-btn w3-red w3-block w3-round-large">Cancel</Link>
                </div>

                </div>
            </>
        );
    }
}

export default NoteAddPage;
