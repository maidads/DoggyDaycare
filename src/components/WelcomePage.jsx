import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div className="welcome-container">
        <nav className="navbar">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/aboutdogs">About Dogs</Link></li>
            </ul>
        </nav>

        <h1 className="welcome-title">Welcome to Doggy Daycare!</h1>
        <img
            src="https://s1.1zoom.me/big0/126/Dogs_Cute_Beautiful_Tongue_Retriever_Glance_Head_520706_1280x720.jpg"
            alt="Cute Dog"
            className="welcome-image"
        />

        <p className="welcome-description">
            This is a dog daycare where we will take care of your dogs. We keep track of all our lovely dog guests so you can have peace of mind!
        </p>
        </div>
    );
}

export default WelcomePage;