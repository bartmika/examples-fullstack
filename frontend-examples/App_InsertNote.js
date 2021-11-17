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
              <div className="w3-container w3-teal">
                 <h1><i class="fa fa-plus"></i> Create Note</h1>
              </div>

              <div className="w3-row">
                    <div className="w3-quarter w3-container">
                    </div>
                    <div className="w3-half w3-container">

                    {hasErrors && errors.title !== "" && errors.description !== "" && <div className="w3-panel w3-red">
                      <h4>Errors</h4>
                      <p>Please fix the following errors.</p>
                    </div>}

                    <div className="w3-container">
                        <p>Please input your note. The (*) fields are required.</p>
                        <p>
                            {hasErrors && errors.title !== ""
                            ? <>
                               <label className="w3-text-red">Title (*)</label>
                               <input type="text" className="w3-input w3-border w3-border-red" name="title" value={title} onChange={this.onTextChange} />
                               <label className="w3-text-red">{errors.title}</label>
                            </>
                            : <>
                               <label>Title (*)</label>
                               <input type="text" className="w3-input w3-border w3-border-blue" name="title" value={title} onChange={this.onTextChange} />
                            </>}
                        </p>
                        <p>
                          {hasErrors && errors.description != ""
                              ? <>
                                  <label className="w3-text-red">Description (*)</label>
                                  <textarea className="w3-input w3-border w3-border-red" rows={8} value={description} name="description" onChange={this.onTextChange}>
                                  </textarea>
                                  <label className="w3-text-red">{errors.description}</label>
                              </>
                              : <>
                                  <label>Description (*)</label>
                                  <textarea className="w3-input w3-border w3-border-blue" rows={8} value={description} name="description" onChange={this.onTextChange}>
                                  </textarea>
                              </>
                          }
                        </p>
                        <p>
                            <button className="w3-btn w3-blue w3-block" type="button" onClick={this.onSubmitClick}>Submit</button>
                        </p>
                        <p>
                            <button className="w3-btn w3-black w3-block" type="button" onClick={this.onCancelClick}>Cancel</button>
                        </p>
                    </div>


                    </div>
                    <div className="w3-quarter w3-container">
                    </div>
              </div>
            </>
        );
    }
}

export default App;
