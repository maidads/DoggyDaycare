import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
        <ul>
            <li><Link to="/doggy-daycare">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/aboutdogs">About Dogs</Link></li>
        </ul>
        </nav>
    );
}

export default Navbar;
