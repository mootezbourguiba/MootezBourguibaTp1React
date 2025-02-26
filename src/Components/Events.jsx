import React, { useState, useEffect } from 'react';
import Event from './Event';
import eventsData from '../data/events.json';
import { Alert, Container, Row, Col } from 'react-bootstrap';

function Events() {
  const [events, setEvents] = useState([...eventsData]); // Utiliser une copie des données
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Simule le chargement des données après 3 secondes
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
      <Row>
        {events.map(event => (
          // Assurez-vous que chaque Col a une clé unique et que les événements sont bien affichés en colonnes
          <Col md={4} key={event.id} className="mb-3">
            <Event event={event} updateEvent={updateEvent} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Events;