import React, { useState } from 'react'
import { getDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

// The following code will display ANY date that is older then TODAYS DATE **AND**
// this code will display the date if the date is SUNDAY.
const modifiers = {
  disabled: date => (date < new Date()) || (getDay(date) === 0),
  highlight: date => getDay(date) === 2 // Highlights Tuesdays
}
const modifiersClassNames = {
  highlight: '-highlight'
}
export default function App() {
  const [date, setDate] = useState()
  return (
    <DatePickerCalendar
      date={date}
      onDateChange={setDate}
      locale={enGB}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
    />
  )
}
// In your CSS:
// .nice-dates-day.-highlight { color: orange; }
