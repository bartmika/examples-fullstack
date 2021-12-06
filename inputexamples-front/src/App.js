import { React, Component } from "react";
import "./w3.css";
import Select from "react-select";


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

    onMultiSelectClick(selectedOptions) {
        console.log(selectedOptions);
        this.setState({
            filterSelections: selectedOptions,
        });
    }

    onSubmitClick(e) {
        console.log("You selected the following filters:");
        const { filterSelections } = this.state;
        const values = [];
        for (let filterOption of filterSelections) {
            values.push(filterOption.value);
        }
        console.log(values);
    }

    render() {
        const { filterSelections, filterOptions } = this.state;

        return (
            <>
                <form className="w3-container">
                    <h1>Basic Multi-Select Example</h1>

                    <label>Filters</label>
                    <Select options={filterOptions} onChange={this.onMultiSelectClick} isMulti={true} />
                    <p><button type="button" className="w3-btn w3-teal" onClick={this.onSubmitClick}>Submit</button></p>
                </form>
            </>
        );
    }
}

export default App;
