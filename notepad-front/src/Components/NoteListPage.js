import { React, Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { getGlobalState, setGlobalState } from "../Helpers/StateHelper";

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

        const globalState = getGlobalState();
        const { alertType, alertMsg} = globalState;

        this.state ={
            alertType: alertType,
            alertMsg: alertMsg,
            notes: [
                {
                    id: 1,
                    title: "hello world",
                    category: "random",
                    text: "Hello and welcome to my app!"
                },
                {
                    id: 2,
                    title: "note to self",
                    category: "reminder",
                    text: "Do not forget to lock the door before you leave"
                },
                {
                    id: 3,
                    title: "another note to self",
                    category: "reminder",
                    text: "Pay the phone bill."
                }
            ],
            forceURL: "",
        };
        this.onListItemClick = this.onListItemClick.bind(this);
    }

    componentDidMount() {
        const globalState = {
            alertType: "",
            alertMsg: "",
        };
        setGlobalState(globalState);
    }

    onListItemClick(e, id) {
        console.log("Clicked on row with ID", id);
        this.setState({
            forceURL: "/" + id,
        });
    }

    render() {
        const { notes, forceURL, alertType, alertMsg } = this.state;

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


                    </div>
                    <ul className="w3-ul w3-white w3-card">
                        {noteElements}
                    </ul>
                </div>

            </>
        );
    }
}

export default NoteListPage;
