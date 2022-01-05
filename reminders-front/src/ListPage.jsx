import { React, useState } from "react";
import { Link } from "react-router-dom";

function ListPage() {
    const [showModal, setShowModal] = useState(false);
    const [clickedID, setClickedID] = useState();

    const dataString = localStorage.getItem("reminders");
    if (dataString === null) {
        localStorage.setItem("reminders", JSON.stringify([]));
    }
    let data = dataString === null ? [] : JSON.parse(dataString);

    function onDeleteClick( id) {
        setClickedID(id);
        setShowModal(true);
    }

    function onConfirmDeleteClick() {
        console.log("Deleting now...");
        data.splice(clickedID, 1);
        console.log("new data->:", data);
        const ds = JSON.stringify(data);
        localStorage.setItem("reminders", ds);
        setShowModal(false);
    }

    console.log("ID:", clickedID);
    console.log("DATA:", data);

    return(
        <>
            <div className="w3-container">
                <h1>List of Reminders</h1>
            </div>
            <div className="w3-container">
                <ul className="w3-ul">
                    {data.map((item, i) => (
                        <li key={i} className="w3-display-container" style={{height:"80px"}}>
                            {/* --- Section 1 of 2: Left Side --- */}
                            <div className="w3-display-left">
                                <span className="w3-large">{item.note}</span>
                                <br />
                                <span className="w3-text-grey">{item.dueDate}</span>
                            </div>
                            {/* --- Section 2 of 2: Right Side --- */}
                            <div className="w3-display-right">
                                <button className="w3-btn w3-right w3-blue w3-round-large"
                                          onClick={(e, b)=>{ onDeleteClick(i) }}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {showModal &&
                <div id="id01" className="w3-modal" style={{display:"block",}}>
                     <div className="w3-modal-content">
                       <div className="w3-container">
                         <span onClick={(e,b) => setShowModal(false)}
                             className="w3-button w3-display-topright">
                            &times;
                        </span>
                         <h1>Warning:</h1>
                         <p>You are about to delete the record, are you sure you want to continue?</p>
                         <p>
                                <button onClick={(e,b) => setShowModal(false)}
                                           type="button"
                                      className="w3-button w3-blue w3-left w3-round-large">
                                    No
                                </button>
                                <button onClick={(e) => onConfirmDeleteClick()}
                                           type="button"
                                      className="w3-button w3-red w3-right w3-round-large">
                                    Yes
                                </button>
                                <br /><br />
                         </p>
                       </div>
                     </div>
                </div>
            }
        </>
    );
}

export default ListPage;
