import { useState, useEffect } from 'react';
// Import to make links, navigate to different routes & route parameters
import { Link, useParams, useNavigate } from 'react-router-dom';
// For http requests
import axios from 'axios';

function ShowEventDetails() {
  // Set state
  const [event, setEvent] = useState({});
  // Destructure to use id from current route in url
  const { id } = useParams();
  // Save hook to variable
  const navigate = useNavigate();

  useEffect(() => {
    // Use useEffect to fetch event details & set state when id param changes
    axios
      .get(`https://event-planning-backend.onrender.com/events/${id}`)
      .then((res) => {
        setEvent(res.data);
      })
      .catch((error) => {
        console.log('Error from showing event details', error);
      });
      // id as dependency to only run when it changes
  }, [id]);

  const handleDelete = (id) => {
    // Delete specific event and navigate to dashboard
    axios
      .delete(`https://event-planning-backend.onrender.com/events/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log('Error form deleting show event details', error);
      });
  };

  // Display details inside grid layout
  const EventItem = (
    <div className='max-w-md mx-auto bg-white rounded overflow-hidden'>
      <div className='grid grid-cols-2 gap-4 px-6 py-4'>
            <div className='font-bold text-gray-700'>Name of Event</div>
            <div>{event.eventName}</div>
          
            <div className='font-bold text-gray-700'>Client(s) Name</div>
            <div>{event.clientName}</div>

            <div className='font-bold text-gray-700'>Type of Event</div>
            <div>{event.eventType}</div>

            <div className='font-bold text-gray-700'>Date of Event</div>
            <div>{event.eventDateTime}</div>

            <div className='font-bold text-gray-700'>Venue</div>
            <div>{event.venue}</div>


            <div className='font-bold text-gray-700'>Theme of Event</div>
            <div>{event.theme}</div>

            <div className='font-bold text-gray-700'>Number of Guests</div>
            <div>{event.numOfGuests}</div>

            <div className='font-bold 
          text-gray-700'>Budget</div>
            <div>{event.budget}</div>

            <div className='font-bold 
          text-gray-700'>Cuisine</div>
            <div>{event.cuisine}</div>

            <div className='font-bold 
          text-gray-700'>Entertainment</div>
            <div>{event.entertainment}</div>

            
            <div className='font-bold 
          text-gray-700'>Notes</div>
            <div>{event.notes}</div>
    </div>
    </div>
  );

  // Card container
  return (
    <div className='min-h-screen bg-gray-100 pb-20'>
      <div className='container mx-auto bg-gray-100'>
        <div className='flex justify-between items-center py-6'>
          <Link to='/dashboard' className='bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-blue-400 ml-20 mt-10 font-geo mb-10'>
            Back to Dashboard
          </Link>
        </div>
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
          <h1 className='text-3xl text-center font-bold text-pink-900 mb-4'>Event Details</h1>
          <hr className='mb-8' />
          {EventItem}
          <div className='flex justify-between mt-8'>
            <button
              type='button'
              className='bg-red-700 text-white px-4 py-2 rounded-lg w-1/2 mr-4 hover:bg-red-600'
              onClick={() => {
                handleDelete(event._id);
              }}
            >
              Delete Event
            </button>
            <Link
              to={`/edit-event/${event._id}`}
              className='bg-indigo-700 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-indigo-600 text-center'
            >
              Edit Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEventDetails;
