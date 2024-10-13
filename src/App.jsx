import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutDogs from './components/AboutDogs';
import CatalogPage from './components/CatalogPage';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/aboutdogs" element={<AboutDogs />} />
      </Routes>
    </Router>
  );
}

export default App;