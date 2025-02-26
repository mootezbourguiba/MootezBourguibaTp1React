import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

// Import des images
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import soldOutImg from '../assets/sold_out.png'; // Ajout de l'image Sold Out
import placeholderImg from '../assets/placeholder.jpg'; // Ajout du placeholder

// Mapping des images
const imageMap = {
  "event1.jpg": event1,
  "event2.jpg": event2,
  "event3.jpg": event3,
  "sold_out.png": soldOutImg, // Ajout du mapping pour Sold Out
  "placeholder.jpg": placeholderImg, // Ajout du mapping pour le placeholder
};

function Event({ event, updateEvent }) {
  const [liked, setLiked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const bookEvent = () => {
    if (event.nbTickets > 0) {
      const updatedEvent = {
        ...event,
        nbTickets: event.nbTickets - 1,
        nbParticipants: event.nbParticipants + 1,
      };
      updateEvent(updatedEvent); // Mettre à jour l'événement dans le composant parent
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000); // Message pendant 3 secondes
    }
  };

  return (
    <Card className="event-card">
      <Card.Img
        variant="top"
        src={event.nbTickets === 0 ? imageMap["sold_out.png"] : imageMap[event.img] || imageMap["placeholder.jpg"]} // Image Sold Out ou event.img ou placeholder
        alt={event.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Price: {event.price}</Card.Text>
        <Card.Text>Number of tickets: {event.nbTickets}</Card.Text>
        <Card.Text>Number of participants: {event.nbParticipants}</Card.Text>
        <div className="d-flex justify-content-between align-items-center"> {/* Ajout d'un container flex */}
          {event.nbTickets === 0 ? (
            <Alert variant="danger">Sold Out</Alert>
          ) : (
            <Button variant="primary" onClick={bookEvent}>
              Book an event
            </Button>
          )}
          <Button variant={liked ? "danger" : "primary"} onClick={toggleLike}>
            {liked ? "Dislike" : "Like"}
          </Button>
        </div>
        {/* Message de confirmation */}
        {showConfirmation && (
          <Alert variant="success">You have booked an event!</Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default Event;