import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CatalogPage from './components/CatalogPage';
import AboutDogs from './components/AboutDogs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/aboutdogs" element={<AboutDogs />} />
      </Routes>
    </Router>
  );
}

export default App;
