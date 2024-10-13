import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutDogs from './components/AboutDogs';
import CatalogPage from './components/CatalogPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/aboutdogs">About Dogs</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/aboutdogs" element={<AboutDogs />} />
      </Routes>
    </Router>
  );
}

export default App;
