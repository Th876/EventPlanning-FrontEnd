import { useNavigate } from "react-router-dom";
// Import create function
import { createEvent } from "../services/events-api";
import { useState } from 'react';
// Import Date picker
import DatePicker from "react-date-picker";


export default function Create() {
    const nav = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const createAnEvent = (e) => {
        e.preventDefault();
        const event = {
            eventName: e.target.eventName.value, clientName: e.target.clientName.value, eventDateTime: e.target.eventdateTime,
            venue: e.target.venue.value,
            theme: e.target.theme.value,
            numOfGuests: e.target.numOfGuests,
            budget: e.target.budget,
            cuisine: e.target.cuisine,
            entertainment: e.target.entertainment,
            notes: e.target.notes,
            isCompleted: false
        }
        // Call createEvent function to process each detail of the event and navigate to the daskboard when user submits form.
        createEvent(event).then(() => nav('/dashboard'))
    }

    const handleDate = (date) => {
        setStartDate(date);
    }

    return(
        <div>
            <h2>Create an Event</h2>
            <form onSubmit={createAnEvent}>
            <label htmlFor="eventName">Event Name: </label>
                <input type='text' name='eventName'/> <br></br>

            <label htmlFor="clientName">Client Name: </label>
                <input type='text' name='clientName'/>

            <label htmlFor="eventDateTime"> Date of Event: </label>
                <DatePicker value={startDate} onChange={handleDate}/> <br></br>

            <label htmlFor="venue"> Venue: </label>
                <input type='text' name='venue'/> <br></br>

            <label htmlFor="theme"> Theme: </label>
                <input type='text' name='theme'/> <br></br>
     
            <label htmlFor="numOfGuests"> N.o Of Guests: </label>
                 <input type='number' name='numOfGuests'/> <br></br>

            <label htmlFor="budget"> Budget: </label>
                 <input type='number' name='budget'/> <br></br>

         <label htmlFor="cuisine"> Cuisine: </label>
                 <input type='text' name='cuisine'/> <br></br>

        <label htmlFor="entertainment"> Entertainment: </label>
                <input type='text' name='entertainment'/> <br></br>

        <label htmlFor="notes"> Notes: </label>
                <textarea type='text' name='notes'/> <br></br>

                <input type='submit'/>
            </form>
        </div>
    )
}