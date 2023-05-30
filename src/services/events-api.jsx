// All endpoints
import axios from 'axios';
// INSERT RENDER/VERCEL baseURL HERE
// 
const baseURL = 'http://localhost:3001/events';
//Index: Show all the things! 
export function getEvents() {
    const URL = baseURL;
    const response = axios.get(URL);
    return response;
}

// Index: Show one thing! 
export function getEvent(id) {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
}


// Edit an event
export function editEvent(id, updatedEvent) {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedEvent);
    return response;
}

// Create an event
export function createEvent(event) {
    const URL = baseURL;
    const response = axios.post(URL, event);
    return response;
}


// Delete an event
export function deleteEvent(id) {
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
}
