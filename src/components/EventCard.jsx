/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  // eslint-disable-next-line react/prop-types
  // Destructure: assign props to variable 'event'
  const { event } = props;

  return (
    <div
  className="max-w-md rounded overflow-hidden mx-auto mb-10 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] light:bg-neutral-100">
    <Link to={`/show-event/${event._id}`}>
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    data-te-ripple-init
    data-te-ripple-color="light">
    <img
      className="rounded-t-lg"
      src="https://i.pinimg.com/originals/be/78/f4/be78f41ebba3d7e41f9e549e2e720b8b.gif"
      alt="confetti" />
    <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div className="p-4">
     <h2 className="text-3xl mb-2 font-shri text-pink-600">
       {/* // eslint-disable-next-line react/prop-types */}
         {event.eventName}
       
     </h2>
     <h3 className="text-xl mb-2 font-geo text-blue-900">{event.clientName}</h3>
     <p className="text-xl text-blue-900">{event.eventType}</p>
     <p className="text-lg text-gray-700">{event.eventDateTime}</p>
   </div>
   </Link>
</div>
  );
};

export default EventCard;
