import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventByName } from '../service/api';

function EventDetails() {
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventByName(eventName);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchData();
  }, [eventName]);

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