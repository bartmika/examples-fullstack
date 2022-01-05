import { React, useState } from "react";
import { Link, Navigate } from "react-router-dom";

function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function AddReminderPage() {
    const [note, setNote] = useState("")
    const [dueDate, setDueDate] = useState(null);
    const [errors, setErrors] = useState();
    const [forceURL, setForceURL] = useState("");

    function onNoteChange(e) {
        const n = e.target.value;
        setNote(n);
    }

    function onDueDateChange(e) {
        const dd = e.target.value;
        setDueDate(dd);
    }

    function onSubmitClick(e) {
        // Our validation begins here...
        let err = {...errors}; // This clones the object.
        if (note === undefined || note === null || note === "") {
            err["note"] = "missing value";
        } else {
            delete err["note"];
        }
        if (dueDate === undefined || dueDate === null || dueDate === "") {
            err["dueDate"] = "missing value";
        } else {
            delete err["dueDate"];
        }

        if (isObjEmpty(err) === false) {
            setErrors(err);
        } else {
            const dataString = localStorage.getItem("reminders");
            const data = JSON.parse(dataString);

            const reminderData = {
                note: note,
                dueDate: dueDate,
            };
            data.push(reminderData);
            console.log(data);
            localStorage.setItem("reminders", JSON.stringify(data));

            setForceURL("/list");
        }
    }

    if (forceURL != "") {
        return <Navigate to={forceURL} />;
    }

    return (
        <>
            <div className="w3-container">
                <h1>Add reminder</h1>
                <p>Please fill in required fields (*).</p>
                <form>
                    <p>
                        <label>Note <sup>(*)</sup>:</label>
                        <input className={`w3-input ${errors && errors.note ? "w3-border-red" : "w3-text-black"}`}
                                    type="text"
                             placeholder="Please fill in note"
                                   value={note}
                                onChange={onNoteChange}
                               autoFocus={true} />
                       {errors && errors.note &&
                           <label className="w3-text-red">{errors.note}</label>
                       }
                    </p>
                    <p>
                        <label>Due Date <sup>(*)</sup>:</label>
                        <input className={`w3-input ${errors && errors.dueDate ? "w3-border-red" : ""}`}
                                    type="date"
                             placeholder="Please fill in due date"
                                   value={dueDate}
                                onChange={onDueDateChange} />
                        {errors && errors.dueDate &&
                            <label className="w3-text-red">{errors.dueDate}</label>
                        }
                    </p>
                    <p className="w3-margin-bottom">
                        <button className="w3-button w3-green w3-right w3-block w3-padding-16"
                                  onClick={onSubmitClick}
                                     type="button">Submit</button>
                    </p>
                    <br />
                    <br />
                    <p className="w3-margin-bottom">
                        <Link to="/" className="w3-btn w3-red w3-right w3-block w3-padding-16">Cancel</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default AddReminderPage;
