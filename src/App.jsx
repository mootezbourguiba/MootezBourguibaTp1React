import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Events from './Components/Events';
import EventDetails from './Components/EventDetails';
import NotFound from './Components/NotFound';
import NavigationBar from './Components/NavigationBar';
import AddEvent from './Components/AddEvent'; // Import du nouveau composant
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/:eventName" element={<EventDetails />} />
        <Route path="/addEvent" element={<AddEvent />} /> {/* Route pour AddEvent */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;