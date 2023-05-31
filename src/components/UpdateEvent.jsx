import { useState, useEffect } from 'react';
// Import to make links, navigate to different routes & route parameters
import { Link, useParams, useNavigate } from 'react-router-dom';
// For http requests
import axios from 'axios';

function UpdateEvent() {
  // Set state
  const [event, setEvent] = useState({
    eventName: "",
    clientName: "",
    eventType: "",
    eventDateTime: "",
    venue: "",
    theme: "",
    numOfGuests: "",
    budget: "",
    cuisine: "",
    entertainment: "",
    notes: "",
  });

  // Destructure to use id from current route in url
  const { id } = useParams();
  // Save hook to variable
  const navigate = useNavigate();

  // Use useEffect to fetch updated event details for each id param & set state with the data response
  useEffect(() => {
    axios
      .get(`http://localhost:3001/events/${id}`)
      // Destructure data response
      .then(({data}) => {
        const {eventName, clientName, eventType,eventDateTime, venue, theme, numOfGuests, budget, cuisine, entertainment, notes} = data;

        setEvent({
            eventName,
            clientName,
            eventType,
            eventDateTime,
            venue,
            theme,
            numOfGuests,
            budget,
            cuisine,
            entertainment,
            notes,
        });
      })
      .catch((error) => {
        console.log('Error from UpdateEvent', error);
      });
  }, [id]);

  // Update state of all properties in event when there's a change in input field
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const specs = {
        eventName: event.eventName,
        clientName: event.clientName,
        eventType: event.eventType,
        eventDateTime: event.eventDateTime,
        venue: event.venue,
        theme: event.theme,
        numOfGuests: event.numOfGuests,
        budget: event.budget,
        cuisine: event.cuisine,
        entertainment: event.entertainment,
        notes: event.notes,
    };

    axios
      .put(`http://localhost:3001/events/${id}`, specs)
      .then(() => {
        navigate(`/show-event/${id}`);
      })
      .catch((error) => {
        console.log('Error in UpdateEvent!', error);
      });
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-6'>
          <Link to='/' className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'>
            Show Event List
          </Link>
        </div>
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
          <h1 className='text-3xl font-bold mb-4 text-center'>Edit Event</h1>
          <p className='text-lg text-center mb-8'>Update Event Details</p>
          <form noValidate onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='eventName' className='block text-gray-700'>
                Name of Event
              </label>
              <input
                type='text'
                placeholder='Event Name'
                name='eventName'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.eventName}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='isbn' className='block text-gray-700'>
                Client(s) Name
              </label>
              <input
                type='text'
                placeholder='Name of client(s)'
                name='clientName'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.clientName}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='author' className='block text-gray-700'>
                Type of Event
              </label>
              <input
                type='text'
                placeholder='Type of Event'
                name='eventType'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.eventType}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='eventDateTime' className='block text-gray-700'>
                Date of Event
              </label>
              <input
                name='eventDateTime'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.eventDateTime}
                onChange={handleChange}/>
            </div>

            <div className='mb-4'>
              <label htmlFor='published_date' className='block text-gray-700'>
                Venue
              </label>
              <input
                type='text'
                placeholder='Venue'
                name='venue'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.venue}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='theme' className='block text-gray-700'>
                Theme of Event
              </label>
              <input
                type='text'
                placeholder='Theme of Event'
                name='theme'
                className='border border-gray-300 px-4 py-2 w-full rounded-md'
                value={event.theme}
                onChange={handleChange}
              />
            </div>


            <div className='mb-4'>
              <label htmlFor='theme' className='block text-gray-700'>Number of Guests
              </label>
              <input
              type='number'
              placeholder='Number of Guests'
              name='numOfGuests'
              className='border border-gray-300 px-4 
              py-2 w-full rounded-md'
              value={event.numOfGuests}
              onChange={handleChange}/>
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600'
            >
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEvent;
