import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { getOrCreateGlobalState, setGlobalState } from "../Helpers/StateHelper";
import { getNotes } from "../API/Note";


function NoteListItem(props) {
    const { note, onListItemClick } = props;
    const { id, title } = note;
    return (
        <li className="w3-display-container w3-hover-grey w3-border" style={{height: "64px"}} onClick={ (e, identifier) => onListItemClick(e, id) }>
            <span className="w3-container w3-padding w3-display-left">
                {title}
            </span>

            <span className="w3-container w3-padding w3-display-right w3-text-grey">
                &#10095;
            </span>
        </li>
    )
}

class NoteListPage extends Component {
    constructor(props) {
        super(props);

        const globalState = getOrCreateGlobalState();

        this.state ={
            alertType: globalState["alertType"],
            alertMsg: globalState["alertMsg"],
            notes: [],
            forceURL: "",
            isLoading: true,
            hasError: false,
        };
        this.onListItemClick = this.onListItemClick.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    componentDidMount() {
        const globalState = {
            alertType: "",
            alertMsg: "",
        };
        setGlobalState(globalState);

        getNotes(this.onSuccess, this.onError, this.onDone);
    }

    onListItemClick(e, id) {
        console.log("Clicked on row with ID", id);
        this.setState({
            forceURL: "/" + id,
        });
    }

    onSuccess(res) {
        const { results } = res.data;
        this.setState({
            notes: results,
            isLoading: false,
            hasError: false,
        });
    }

    onError(err) {

    }

    onDone() {}

    render() {
        const { notes, forceURL, alertType, alertMsg, isLoading } = this.state;

        if (forceURL != "") {
            return <Navigate to={forceURL} />;
        }

        let noteElements = [];
        for (let i = 0; i < notes.length; i++) {
            let note = notes[i];
            let noteElement = <NoteListItem note={note} onListItemClick={this.onListItemClick} />;
            noteElements.push(noteElement);
        }

        return (
            <>
                <div className="w3-container w3-ios-deep-blue">
                    <div className="w3-display-container" style={{height:"50px"}}>
                        <div className="w3-display-left w3-ios-deep-blue">
                        </div>
                        <div className="w3-display-middle w3-center">

                        </div>
                        <div className="w3-display-right">
                            <Link to="/add" className="w3-btn"><i className="fa fa-plus-circle"></i> Add</Link>
                        </div>
                    </div>
                </div>

                {alertType === "success" &&
                    <div class="w3-panel w3-green">
                        <h3>Success!</h3>
                        <p>{alertMsg}</p>
                    </div>
                }

                <div>
                    <h1 className="w3-margin-left"><strong><i className="fa fa-list"></i> View List</strong></h1>
                    <div className="w3-container">
                        {isLoading
                            ? <div class="w3-panel w3-blue">
                                  <h3><i className="fa fa-spinner w3-spin"></i> Loading</h3>
                                  <p>Retrieving data from server, please wait.</p>
                            </div>
                            : <div>
                                {notes.length > 0
                                    ? <ul className="w3-ul w3-white w3-card">
                                        {noteElements}
                                    </ul>
                                    : <div className="w3-white w3-container">
                                        <h4>Welcome <i className="fa fa-hand-peace-o"></i></h4>
                                        <p>To get started, click the add button and begin creating your notes.</p>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>

            </>
        );
    }
}

export default NoteListPage;
