import { React, Component } from "react";
import "./w3.css";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterSelections: [],
            filterOptions: [
               {value:"library", label:"Library"},
               {value:"pub", label:"Pub"},
               {value:"party", label:"Party"},
               {value:"park", label:"Park"},
               {value:"mall", label:"Mall"},
            ],
        }
        this.onMultiSelectClick = this.onMultiSelectClick.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    onMultiSelectClick(e) {
        // Special thanks: https://stackoverflow.com/q/52759162
        const options = e.target.options;
        var values = [];
        for (var j = 0, l = options.length; j < l; j++) {
            if (options[j].selected) {
                values.push(options[j].value);
            }
        }
        this.setState({
            filterSelections: values,
        }, ()=>{
            console.log("onMultiSelectClick Selected:", values);
        });
    }

    onSubmitClick(e) {
        console.log("You selected the following filters:");
        const { filterSelections } = this.state;
        console.log(filterSelections);
    }

    render() {
        const { filterSelections, filterOptions } = this.state;
        const elements = [];

        // Handle the message.
        if (filterSelections.length === 0) {
            elements.push(
                <option value="" disabled selected>Choose your option</option>
            );
        } else {
            elements.push(
                <option value="" disabled>Choose your option</option>
            );
        }

        // Render all the options.
        for (let filterOption of filterOptions) {
            const { value, label } = filterOption;

            // Find out if the option was selected.
            let wasSelected = false;
            for (let selectedOption of filterSelections) {
                if (value === selectedOption) {
                    wasSelected = true;
                }
            }

            // Add our option to the GUI.
            elements.push(
                <option selected={wasSelected} value={value}>{label}</option>
            );
        }

        return (
            <>
                <form className="w3-container">
                    <h1>Basic Multi-Select Example</h1>

                    <label>Filters</label>
                    <select className="w3-select" name="option" multiple onChange={this.onMultiSelectClick}>
                        {elements}
                    </select>
                    <p><button type="button" className="w3-btn w3-teal" onClick={this.onSubmitClick}>Submit</button></p>
                </form>
            </>
        );
    }
}

export default App;
