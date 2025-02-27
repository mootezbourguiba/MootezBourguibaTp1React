import React, { useState, useEffect } from 'react';
import Event from './Event';
import eventsData from '../data/events.json';
import { Alert, Container } from 'react-bootstrap';

function Events() {
  const [events, setEvents] = useState([...eventsData]);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer1);
  }, []);

  const updateEvent = (updatedEvent) => {
    setEvents(prevEvents =>
      prevEvents.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return (
    <Container>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Hey welcome to Esprit Events!
        </Alert>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-around', overflowX: 'auto', gap: '20px', paddingBottom: '10px' }}>
        {events.map(event => (
          <Event key={event.id} event={event} updateEvent={updateEvent} />
        ))}
      </div>
    </Container>
  );
}

export default Events;