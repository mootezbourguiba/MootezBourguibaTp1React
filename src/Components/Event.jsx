import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import des images (vérifiez que les chemins sont corrects !)
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import soldOutImg from '../assets/sold_out.png';
import placeholderImg from '../assets/placeholder.jpg';

const imageMap = {
  "Festival international de Carthage": event1,
  "Festival de la médina de Tunis": event2,
  "Journées cinématographiques de Carthage (JCC)": event3,
  "sold_out.png": soldOutImg,
  "placeholder.jpg": placeholderImg,
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
      updateEvent(updatedEvent);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  return (
    <Card className="event-card" style={{ width: '30vw', minWidth: '300px' }}>
      <Card.Img
        variant="top"
        src={imageMap[event.name] || placeholderImg} // Simplification du code
        alt={event.name}
        className="event-image"
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/events/${event.name}`}>{event.name}</Link>
        </Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Price: {event.price}</Card.Text>
        <Card.Text>Number of tickets: {event.nbTickets}</Card.Text>
        <Card.Text>Number of participants: {event.nbParticipants}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          {event.nbTickets === 0 ? (
            <Alert variant="danger">Sold Out</Alert>
          ) : (
            <Button className="book-event-button" onClick={bookEvent}>
              Book an event
            </Button>
          )}
          <Button className="like-button" onClick={toggleLike}>
            {liked ? "Dislike" : "Like"}
          </Button>
        </div>
        {showConfirmation && (
          <Alert variant="success">You have booked an event!</Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default Event;