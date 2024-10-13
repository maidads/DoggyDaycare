import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutDogs from './components/AboutDogs';
import CatalogPage from './components/CatalogPage';
import DogDetails from './components/DogDetails';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/doggy-daycare" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/aboutdogs" element={<AboutDogs />} />
        <Route path="/dogs/:id" element={<DogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;