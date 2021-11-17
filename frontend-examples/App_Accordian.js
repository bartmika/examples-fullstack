import { React, Component } from "react";


function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            errors: {},
            section1: false,
            section2: false,
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onAccordianClick = this.onAccordianClick.bind(this);
    }

    onTextChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    onSubmitClick(e) {
        const { title, description } = this.state;

        let errors = this.state.errors;

        // This is where you do validation before making a submission to the backend server.
        if (title === "") {
            errors["title"] = "missing value";

        } else {
            errors["title"] = ""; // Reset the errors on submit.
        }
        if (description === "") {
            errors["description"] = "missing value";
        } else {
            errors["description"] = "";
        }
        this.setState({
            errors: errors
        });


        console.log("Submitting...", title, description);
    }

    onCancelClick(e) {
        console.log("Go back to menu...");
    }

    onAccordianClick(e, sectionKey) {
        let sectionValue = this.state[sectionKey];
        console.log("onAccordianClick|sectionKey", sectionKey);
        console.log("onAccordianClick|sectionValue", sectionValue);

        // Change the state to the opposite.
        sectionValue = !sectionValue;
        console.log("onAccordianClick|NEW sectionValue", sectionValue);

        this.setState({
            [sectionKey]: sectionValue,
        });
    }

    render() {
        const { section1, section2 } = this.state;
        console.log("render|section1", section1);
        console.log("render|section2", section2);
        return (
            <>
                <div className="w3-container">
                    {/* THIS CODE WILL ONLY WORK IN DESKTOP/TABLET */}
                    <div className="w3-hide-small">
                        <h1>Example of responsive layout</h1>
                        <h4>Section 1</h4>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <h4>Section 2</h4>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                        <p>Some text..</p>
                    </div>

                    {/* THIS CODE WILL RUN ONLY IN MOBILE */}
                    <div className="w3-hide-medium w3-hide-large">
                        <h3>Example of responsive layout</h3>
                        <button onClick={ (e, sectionKey) => this.onAccordianClick(e, "section1") } className="w3-btn w3-block w3-black w3-left-align">Open Section 1</button>
                        <div className={`w3-container ${section1 ? 'w3-show' : 'w3-hide'}`}>
                           <h4>Section 1</h4>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                        </div>
                        <button onClick={ (e, sectionKey) => this.onAccordianClick(e, "section2") } className="w3-btn w3-block w3-black w3-left-align">Open Section 2</button>
                        <div className={`w3-container ${section2 ? 'w3-show' : 'w3-hide' }`}>
                           <h4>Section 2</h4>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                           <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
