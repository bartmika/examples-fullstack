// EXAMPLE OF A LOGIN FORM USING `useState` HOOK.
import React, { useState } from "react";


export default function App(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onEmailTextChange(e) {
        setEmail(e.target.value);
    }

    function onPasswordTextChange(e) {
        setPassword(e.target.value);
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
            <button type="button" className="w3-btn w3-blue w3-block" onClick={onSubmitClick}>Login</button>
            </p>
        </form>
        </>
    );
}
