import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/events.json';

function EventDetails() {
  const { eventName } = useParams();
  const event = eventsData.find((event) => event.name === eventName);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>Price: {event.price}</p>
      {/* Autres détails de l'événement */}
    </div>
  );
}

export default EventDetails;