import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

function ShowEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/events')
      .then((res) => {
        setEvents(res.data);
      })
      .catch((error) => {
        console.log('Error from ShowEvents', error);
      });
  }, []);

  const eventList =
  events.length === 0 ? (
      <p className="text-center">There are no events!</p>
    ) : (
        events.map((event, index) => <EventCard event={event} key={index} />)
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-4 mt-12 font-geo text-pink-900">Dashboard</h2>
        </div>

        <div className="flex justify-end">
          <Link
            to="/create-event"
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-400 mr-10 font-geo">+ Add New Event
          </Link>
        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">{eventList}
        </div>
      </div>
    </div>
  );
}

export default ShowEvents;
