/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  // eslint-disable-next-line react/prop-types
  // Destructure: assign props to variable 'event'
  const { event } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto">
    
      <Link to={`/show-event/${event._id}`}> 
      <img
        className="w-full h-48 object-cover"
        // src="https://i.pinimg.com/originals/be/78/f4/be78f41ebba3d7e41f9e549e2e720b8b.gif"
        src="https://condaluna.com/assets/stickers/confetti-drop.gif"
        // src="https://i.gifer.com/origin/1a/1af8d3b487b77085d5288814f151e1de.gif"
        // src="https://i.pinimg.com/originals/e9/93/d1/e993d191d03335fd09a1987db3f8d39a.gif"
        // src="https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="event card photo" height="200"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {/* // eslint-disable-next-line react/prop-types */}
            {event.eventName}
          
        </h2>
        <h3 className="text-lg mb-2">{event.clientName}</h3>
        <p className="text-gray-700">{event.eventType}</p>
        <p className="text-gray-700">{event.eventDateTime}</p>
      </div>
      </Link>
    </div>
  );
};

export default EventCard;
