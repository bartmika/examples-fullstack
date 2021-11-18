import { React, Component } from "react";
import { Link } from "react-router-dom";
import { getNote } from "../API/Note";
import { getGlobalState, setGlobalState } from "../Helpers/StateHelper";


class NoteDetailsPage extends Component {
    constructor(props) {
        super(props);

        // Special thanks to link via https://stackoverflow.com/a/3730376
        var stuff = window.location.pathname.split('/');
        var id = stuff[stuff.length-1];

        const globalState = getGlobalState()

        this.state ={
            noteId: id,
            title: "-",
            category: "-",
            text: "-",
            isLoading: true,
            hasError: false,
            alertType: globalState["alertType"],
            alertMsg: globalState["alertMsg"],
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    componentDidMount() {
        const { noteId } = this.state;
        getNote(noteId, this.onSuccess, this.onError, this.onDone);
    }

    onSuccess(res) {
        const { id, title, category, text } = res.data;
        this.setState({
            id: id,
            title: title,
            category: category,
            text: text,
            isLoading: false,
        });

        setGlobalState({
            id: id,
            title: title,
            category: category,
            text: text,
        });
    }

    onError(err) {
        this.setState({
            hasError: true,
        });
    }

    onDone() {

    }

    render() {
        const { noteId, title, category, text, isLoading, hasError, alertType, alertMsg } = this.state;
        return (
            <>
                <div className="w3-ios-deep-blue w3-display-container" style={{height:"50px"}}>
                    <div className="w3-display-left">
                        <Link to="/" className="w3-btn">&#10094; Back</Link>
                    </div>
                    <div className="w3-display-middle">
                    </div>
                    <div className="w3-display-right w3-padding">
                        {isLoading
                            ? <button disabled={true} className="w3-btn"><i className="fa fa-pencil"></i> Edit</button>
                            : <Link to={`/${noteId}/update`} className="w3-btn"><i className="fa fa-pencil"></i> Edit</Link>
                        }
                    </div>
                </div>

                {hasError &&
                    <div class="w3-panel w3-red">
                      <h3>Error</h3>
                      <p>The record was not found or network connectivity problem occured.</p>
                    </div>
                }

                {isLoading &&
                    <div class="w3-panel w3-blue">
                          <h3><i className="fa fa-spinner w3-spin"></i> Loading</h3>
                          <p>Retrieving data from server, please wait.</p>
                    </div>
                }

                {alertType === "success" &&
                    <div class="w3-panel w3-green">
                        <h3>Success!</h3>
                        <p>{alertMsg}</p>
                    </div>
                }

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
                    {isLoading
                        ? <button disabled={true} className="w3-btn w3-block w3-red w3-round-large">Delete</button>
                        : <Link to={`/${noteId}/delete`} className="w3-btn w3-block w3-red w3-round-large">Delete</Link>
                    }
                </div>
            </>
        );
    }
}

export default NoteDetailsPage;
