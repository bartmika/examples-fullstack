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
            errors: {}
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
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

    render() {
        const { title, description, errors } = this.state;
        const hasErrors = !isEmpty(errors);
        return (
            <>
              <div className="w3-bar w3-red w3-mobile w3-hide-small">
                 <div className="w3-bar-item w3-mobile">Home</div>
                 <div className="w3-bar-item w3-mobile">Login</div>
                 <div className="w3-bar-item w3-mobile">Register</div>
                 <div className="w3-bar-item w3-mobile">About</div>
                 <div className="w3-bar-item w3-mobile">Contact</div>
              </div>

              <div className="w3-dropdown-hover w3-hide-medium w3-red w3-hide-large" style={{width:"100%"}}>
                  <button className="w3-button"><i className="fa fa-list"></i></button>
                  <div className="w3-dropdown-content w3-bar-block w3-border">
                    <a href="#" className="w3-bar-item w3-button"><i className="fa fa-home"></i>&nbsp;Home</a>
                    <a href="#" className="w3-bar-item w3-button"><i className="fa fa-lock"></i>&nbsp;Login</a>
                    <a href="#" className="w3-bar-item w3-button">Register</a>
                    <a href="#" className="w3-bar-item w3-button">About</a>
                    <a href="#" className="w3-bar-item w3-button">Contact</a>
                  </div>
               </div>

              <div className="w3-container w3-teal">
                 <h1><i class="fa fa-plus"></i> Create Note</h1>
              </div>




            </>
        );
    }
}

export default App;
