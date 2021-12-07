import { React, Component } from "react";
import "./w3.css";
import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Select from "react-select";

// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-6.php
function addMinutes(dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCalendarPickModal: false,
            date: null,
            time: null,
        };
        this.onShowOpenCalendarPickModal = this.onShowOpenCalendarPickModal.bind(this);
        this.onHideOpenCalendarPickModal = this.onHideOpenCalendarPickModal.bind(this);
        this.onCalendarPickDateChange = this.onCalendarPickDateChange.bind(this);
        this.onCalendarPickTimeChange = this.onCalendarPickTimeChange.bind(this);
        this.onConfirmDateTimePickClick = this.onConfirmDateTimePickClick.bind(this);
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
            date: pickedDate,
        });
    }

    onCalendarPickTimeChange(pickedTime) {
        this.setState({
            time: pickedTime.value,
        });
    }

    onConfirmDateTimePickClick() {
        const { date, time } = this.state;

        const minutes = 60 * time;

        const newDate = addMinutes(date, minutes);

        console.log("your date is:", newDate);

        this.setState({
            dateTime: newDate,
            showCalendarPickModal: false,
        });
    }

    onSubmitClick(e){
        const { date } = this.state;
        console.log("your date is:", date);
    }

    render() {
        const { showCalendarPickModal, dateTime, date } = this.state;
        const timeOptions = [
            {value: 1, label: "1 AM"},
            {value: 2, label: "2 AM"},
            {value: 3, label: "3 AM"},
            {value: 4, label: "4 AM"},
            {value: 5, label: "5 AM"},
            {value: 6, label: "6 AM"},
        ]

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

                                <br />

                                <Select options={timeOptions} onChange={this.onCalendarPickTimeChange} />

                                <br />

                            </div>
                            <footer class="w3-container">
                                <button type="button" className="w3-button w3-block w3-blue" onClick={this.onConfirmDateTimePickClick}>Confirm</button>
                                <br />
                            <p></p>
                            </footer>
                        </div>
                    </div>}

                    <label>Pick Date</label>
                    {/* Note on formats: https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/ */}
                    <input className="w3-input"
                                type="text"
                             onClick={this.onShowOpenCalendarPickModal}
                         placeholder="Please choose the date."
                               value={dateTime ? format(dateTime, 'EEEE,MMMM do, yyyy hh:mm a', { locale: enGB }) : 'none'}
                    />

                    <p><button type="button" className="w3-btn w3-teal" onClick={this.onSubmitClick}>Submit</button></p>
                </form>
            </>
        );
    }
}

export default App;
