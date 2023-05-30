// Events.js displays ALL events on the dashboard & user can click individual events to see more details
import { getEvents } from "../services/events-api";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents().then(res => setEvents(res.data));
    }, []);

    console.log(events);
    return (
        <div>
            <ul>
                {events.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/${item._id}`}>{item.eventName}</Link>
                            <br></br>
                            <a href={`/events/${item._id}/edit`}>Edit Event</a>
                            
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}