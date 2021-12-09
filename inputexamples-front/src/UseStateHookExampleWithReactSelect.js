// EXAMPLE OF A LOGIN FORM USING `useState` HOOK.
import React, { useState } from "react";
import Select from "react-select";

// NOTE: Create a field options file in your constants and save the following.
const PROGRAMMING_LANGUAGE_FIELD_OPTIONS = [
    {value: "go", label: "Golang"},
    {value: "javascript", label:"JavaScript"},
    {value: "html", label:"HTML"},
    {value: "other", label:"Other (Please specify)"},
];

export default function App(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [programming, setProgramming] = useState("");
    const [isProgrammingOther, setIsProgrammingOther] = useState(false);
    const [programmingOther, setProgrammingOther] = useState("");

    console.log("PROGRAMMING:", programming);

    function onEmailTextChange(e) {
        setEmail(e.target.value);
    }

    function onPasswordTextChange(e) {
        setPassword(e.target.value);
    }

    function onFullNameTextChange(e) {
        setFullName(e.target.value);
    }

    function onProgrammingSelectChange(dict) {
        console.log("onProgrammingSelectChange:", dict);
        setProgramming(dict);
        setIsProgrammingOther(dict.value === "other");
    }

    function onProgrammingOtherTextChange(e) {
        setProgrammingOther(e.target.value);
    }

    function onSubmitClick(e) {
        console.log(email, password);
    }

    return (
        <>
        <div className="w3-container w3-blue">
            <h2>Input Form</h2>
        </div>

        <form className="w3-container">
            <p>
                <label>Email</label>
                <input className="w3-input" type="text" value={email} onChange={onEmailTextChange} />
            </p>
            <p>
                <label>Password</label>
                <input className="w3-input" type="password" value={password} onChange={onPasswordTextChange} />
            </p>
            <p>
                <label>Full Name</label>
                <input className="w3-input" type="text" value={fullName} onChange={onFullNameTextChange} />
            </p>
            <p>
                <label>What is language are you more skilled in?</label>
                <Select options={PROGRAMMING_LANGUAGE_FIELD_OPTIONS}
                          value={programming}
                       onChange={onProgrammingSelectChange}
                />
            </p>
            {isProgrammingOther && <p>
                <label>Programming Other</label>
                <input className="w3-input" type="text" value={programmingOther} onChange={onProgrammingOtherTextChange} />
            </p>}
            <p>
            <button type="button" className="w3-btn w3-blue w3-block" onClick={onSubmitClick}>Login</button>
            </p>
        </form>
        </>
    );
}
