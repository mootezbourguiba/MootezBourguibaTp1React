import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Events from './Components/Events'; // Retirez l'import classique
// import EventDetails from './Components/EventDetails'; // Retirez l'import classique
// import NotFound from './Components/NotFound'; // Retirez l'import classique
import NavigationBar from './Components/NavigationBar'; // Nouveau composant

// Lazy load des composants
const Events = lazy(() => import('./Components/Events'));
const EventDetails = lazy(() => import('./Components/EventDetails'));
const NotFound = lazy(() => import('./Components/NotFound'));

function App() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}> {/* Afficher un message de chargement */}
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events/:eventName" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;