import { React, Component } from "react";
import "./w3.css";
import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCalendarPickModal: false,
        };
        this.onShowOpenCalendarPickModal = this.onShowOpenCalendarPickModal.bind(this);
        this.onHideOpenCalendarPickModal = this.onHideOpenCalendarPickModal.bind(this);
        this.onCalendarPickDateChange = this.onCalendarPickDateChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    onShowOpenCalendarPickModal() {
        this.setState({
            showCalendarPickModal: true,
        });
    }

    onHideOpenCalendarPickModal() {
        this.setState({
            showCalendarPickModal: false,
        });
    }

    onCalendarPickDateChange(pickedDate) {
        this.setState({
            showCalendarPickModal: false,
            date: pickedDate,
        });
    }

    onSubmitClick(e){
        const { date } = this.state;
        console.log("your date is:", date);
    }

    render() {
        const { showCalendarPickModal, date } = this.state;

        return (
            <>
                <form className="w3-container">
                    <h1>Basic Calendar in Modal Example</h1>

                    {showCalendarPickModal && <div id="id01" className="w3-modal" style={{display: showCalendarPickModal ? "block" : "none",}}>
                        <div className="w3-modal-content">
                            <div className="w3-container">
                                <span className="w3-button w3-display-topright" onClick={this.onHideOpenCalendarPickModal}>&times;</span>
                                <br />
                                <br />
                                <h4>Please pick a date:</h4>

                                <DatePickerCalendar locale={enGB} onDateChange={this.onCalendarPickDateChange} date={date} />
                            </div>
                            <footer class="w3-container">
                                <br />
                            <p></p>
                            </footer>
                        </div>
                    </div>}

                    <label>Pick Date</label>
                    <input className="w3-input" type="text" onClick={this.onShowOpenCalendarPickModal} placeholder="Please choose the date." value={date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'} />

                    <p><button type="button" className="w3-btn w3-teal" onClick={this.onSubmitClick}>Submit</button></p>
                </form>
            </>
        );
    }
}

export default App;
