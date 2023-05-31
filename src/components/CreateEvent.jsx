// Imports
import { useState } from "react";
import { Link } from "react-router-dom";
// For http requests
import axios from "axios";
// To navigate to different routes
import { useNavigate } from "react-router-dom";


const CreateEvent = () => {
  // Save hook to variable 
  const nav = useNavigate();
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

  // Update state of all properties in event when there's a change in input field
  const handleChange = (e) => {
    setEvent({...event, [e.target.name] : e.target.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      // Make post request to endpoint with new details on submission
    await axios.post('http://localhost:3001/events', event);
      setEvent({
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

      // After form submission, navigate to dashboard
      nav('/dashboard');

    } catch(error) {
      console.log('Error creating event', error);
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md'>
        <div className='mb-4'>
            
            <Link to='/dashboard' className='inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mb-10'>
              Back to Dashboard
            </Link>
          </div>
          
            <h1 className='text-3xl font-bold text-center mb-10'>Add New Event</h1>

            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Name of Event'
                  name='eventName'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  value={event.eventName}
                  onChange={handleChange}
                />
              </div>
              <br />

              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Client(s) Name'
                  name='clientName'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  value={event.clientName}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Type of Event'
                  name='eventType'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  value={event.eventType}
                  onChange={handleChange}/>
              </div>

              <div className='mb-4'>
                <input type='date' 
                name='eventDateTime' 
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                value={event.eventDateTime}
                onChange={handleChange}/>
              </div>

              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Venue'
                  name='venue'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  value={event.venue}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <input
                  type='text'
                  placeholder='Theme of Event'
                  name='theme'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  value={event.theme}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <input
                type='number'
                placeholder='Number of Guests'
                name='numOfGuests'
                className='w-full px-3 py-2 border 
              border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 
              focus:ring-yellow-500'
              value={event.numOfGuests} onChange={handleChange}/>
              </div>

              <div className='mb-4'>
                <input
                type='text'
                placeholder='Budget'
                name='budget'
                className='w-full px-3 py-2 border 
              border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 
              focus:ring-yellow-500'
              value={event.budget} onChange={handleChange}/>
              </div>

              <div className='mb-4'>
                <input
                type='text'
                placeholder='Cuisine'
                name='cuisine'
                className='w-full px-3 py-2 border 
              border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 
              focus:ring-yellow-500'
              value={event.cuisine} onChange={handleChange}/>
              </div>

              <div className='mb-4'>
               <input
               type='text'
               placeholder='Entertainment'
               name='entertainment'
               className='w-full px-3 py-2 border 
             border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 
             focus:ring-yellow-500'
             value={event.entertainment} onChange={handleChange}/>
             </div>
            
             <div className='mb-4'>
               <textarea
               type='text'
               placeholder='Notes'
               name='notes'
               className='w-full px-3 py-2 border 
             border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 
             focus:ring-yellow-500'
             value={event.notes} onChange={handleChange}></textarea>
             </div>


              <input
                type='submit'
                className='w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600' value='Create Event'/>
            </form>
          </div>
        </div>
  );
};

























































































export default CreateEvent;