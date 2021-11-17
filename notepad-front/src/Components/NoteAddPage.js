import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";


class NoteAddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forceURL: "",
        }

        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onSaveClick(e) {
        const id = 1; // Pretend this is our value.
        console.log("Saved!");
        this.setState({
            forceURL: "/" + id,
        });
    }

    render() {
        const { forceURL } = this.state;
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
                    <input className="w3-input" type="text" placeholder="Enter title" /></p>
                    <p>
                    <label>Category (*)</label>
                    <input className="w3-input" type="text" placeholder="Enter category" /></p>
                    <p>
                    <label>Text (*)</label>
                    <textarea className="w3-input" rows={8} placeholder="Enter text message of the note"></textarea>
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
