import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";


class NoteUpdatePage extends Component {
    constructor(props) {
        super(props);

        // Special thanks to link via https://stackoverflow.com/a/3730376
        var stuff = window.location.pathname.split('/');
        console.log(stuff);
        var id = stuff[1];

        this.state ={
            noteId: id,
            forceURL: "",
            title: "Hello world!",
            category: "random",
            text: "Hello this is a test comment. Hello this is a test comment. Hello this is a test comment. Hello this is a test comment. Hello this is a test comment.",
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onSaveClick(e) {
        const id = 1; // Pretend this is our value.
        console.log("Saved!");
        this.setState({
            forceURL: "/" + id,
        });
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { forceURL, noteId, title, category, text } = this.state;
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
                    <button onClick={this.onSaveClick} className="w3-btn w3-green w3-block w3-round-large">Save</button>
                    <Link to={`/${noteId}`} className="w3-margin-top w3-btn w3-red w3-block w3-round-large">Cancel</Link>
                </div>
            </>
        );
    }
}

export default NoteUpdatePage;
