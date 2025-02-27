import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addEvent } from '../service/api';
import { useNavigate } from 'react-router-dom';

function AddEvent() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [nbTickets, setNbTickets] = useState(0);
  const [img, setImg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      name,
      description,
      img,
      price: Number(price),
      nbTickets: Number(nbTickets),
      nbParticipants: 0,
      like: false,
    };

    const addedEvent = await addEvent(newEvent);

    if (addedEvent) {
      // Rediriger vers la liste des événements après l'ajout
      navigate('/');
    } else {
      // Gérer l'erreur d'ajout
      console.error("Error adding event");
      alert("Error adding event");
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h1>Add a new Event to your Event List</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
          />
        </Form.Group>

        <Form.Group controlId="formNbTickets">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={nbTickets}
            onChange={(e) => setNbTickets(e.target.value)}
            required
            min="0"
          />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL de l'image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add an Event
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default AddEvent;