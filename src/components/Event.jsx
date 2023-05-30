// Event.js is for delete, edit and back to main page option
import { useState, useEffect } from 'react';
import {getEvent, deleteEvent} from '../services/events-api';
import { useParams, useNavigate } from 'react-router-dom';

export default function Event() {
    const nav = useNavigate();
    const {id} = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        getEvent(id).then(res => setEvent(res.data))}
        , []);

        // When event is deleted navigate to dashboard
    // const deleteAnEvent = () => {
        // deleteEvent(id);
        // nav('/dashboard');
    // }
    // Pass prop to component

    return (
        <div>
            <h1>Event: </h1>
            <h3>{event.eventName}</h3>
            <h3>{event.clientName}</h3>
            {/*  */}
            isCompleted: <input type='checkbox' defaultChecked={event.isCompleted} disabled/>
            <br></br>
            {/* <button onClick={() => {nav(`${id}/edit`)}}>Edit Event</button> */}
            {/* <br></br> */}
            {/* {/* <button onClick={deleteAnEvent}>Delete Event</button> */} 
            <button onClick={() => {nav('/dashboard')}}>Back to Dashboard</button>
        </div>
    )

    
}