// EditEvents.js is used to update/edit
import {getEvent, editEvent} from '../services/events-api';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Import Date picker
import DatePicker from "react-date-picker";

export default function EditEvents() {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getEvent(id).then(res => setData(res.data))
    }, []);

    const editAnEvent = (e) => {
        e.preventDefault();
        const updatedEvent = {
            eventName: e.target.eventName.value, 
            clientName: e.target.clientName.value, 
            eventDateTime: e.target.eventdateTime,
            venue: e.target.venue.value,
            theme: e.target.theme.value,
            numOfGuests: e.target.numOfGuests,
            budget: e.target.budget,
            cuisine: e.target.cuisine,
            entertainment: e.target.entertainment,
            notes: e.target.notes,
            isCompleted: e.target.isCompleted.checked
        }
        editEvent(id, updatedEvent);
        nav(`/${id}`);
    }

    const handleDate = (date) => {
        setStartDate(date);
    }

    return (
        <form onSubmit={editAnEvent}>
            <label htmlFor="eventName">Event Name: </label>
            <input type='text' defaultValue={data.eventName}/> 
            <br></br>

            <label htmlFor="clientName">Client Name: </label>
            <input type='text' defaultValue={data.clientName}/>
            <br></br>

        <label htmlFor="eventDateTime"> Date of Event: </label>
            <DatePicker defaultValue={startDate} onChange={handleDate}/> 
            <br></br>

        <label htmlFor="venue"> Venue: </label>
            <input type='text' defaultValue={data.venue}/> 
            <br></br>

        <label htmlFor="theme"> Theme: </label>
            <input type='text' defaultValue={data.theme}/> 
            <br></br>
 
        <label htmlFor="numOfGuests"> N.o Of Guests: </label>
             <input type='number' defaultValue={data.numOfGuests}/> 
             <br></br>

        <label htmlFor="budget"> Budget: </label>
             <input type='number' defaultValue={data.budget}/> 
             <br></br>

     <label htmlFor="cuisine"> Cuisine: </label>
             <input type='text' defaultValue={data.cuisine}/> 
             <br></br>

    <label htmlFor="entertainment"> Entertainment: </label>
            <input type='text' defaultValue={data.entertainment}/> 
            <br></br>

    <label htmlFor="notes"> Notes: </label>
            <textarea type='text' defaultValue={data.notes}/> 
            <br></br>
            <input type='submit'>Update Event</input>
        </form>
    )
}
