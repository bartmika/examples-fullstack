import { React, Component } from "react";
import { Link } from "react-router-dom";

class NoteDetailsPage extends Component {
    constructor(props) {
        super(props);

        // Special thanks to link via https://stackoverflow.com/a/3730376
        var stuff = window.location.pathname.split('/');
        var id = stuff[stuff.length-1];

        this.state ={
            noteId: id,
            title: "Hello world!",
            category: "random",
            text: "Hello this is a test comment. Hello this is a test comment. Hello this is a test comment. Hello this is a test comment. Hello this is a test comment.",
        }
    }

    render() {
        const { noteId, title, category, text } = this.state;
        return (
            <>
                <div className="w3-ios-deep-blue w3-display-container" style={{height:"50px"}}>
                    <div className="w3-display-left">
                        <Link to="/" className="w3-btn">&#10094; Back</Link>
                    </div>
                    <div className="w3-display-middle">
                    </div>
                    <div className="w3-display-right w3-padding">
                        <Link to={`/${noteId}/update`} className="w3-btn"><i className="fa fa-pencil"></i> Edit</Link>
                    </div>
                </div>
                <h1 className="w3-margin-left"><strong>View Details</strong></h1>
                <h5 className="w3-text-grey w3-margin-left">Meta</h5>

                <div className="w3-white w3-margin w3-xround">
                    <ul className="w3-ul">
                        <li>
                            <strong>Title:</strong><span className="w3-text-grey w3-right">{title}</span>
                        </li>
                        <li>
                            <strong>Category:</strong><span className="w3-text-grey w3-right">{category}</span>
                        </li>
                        <li>
                            <strong>Text:</strong><span className="w3-text-grey"><br />{text}</span>
                        </li>
                    </ul>
                </div>

                <div className="w3-bottom w3-padding">
                    <Link to={`/${noteId}/delete`} className="w3-btn w3-block w3-red w3-round-large">Delete</Link>
                </div>
            </>
        );
    }
}

export default NoteDetailsPage;
