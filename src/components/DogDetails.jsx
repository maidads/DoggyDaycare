import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DogDetails.css';

function DogDetails() {
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/670c1ff0e41b4d34e4421001')
        .then(response => response.json())
        .then(data => {
            const selectedDog = data.record.find(d => d.chipNumber === id);
            setDog(selectedDog);
        });
    }, [id]);

    if (!dog) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dog-details-container">
        <div className="dog-details-card">
            <img 
            src={dog.img || 'https://cdn-icons-png.flaticon.com/512/4823/4823463.png'} 
            alt={dog.name} 
            className="dog-details-image"
            />
            <h2>{dog.name}</h2>
            <p><strong>Breed:</strong> {dog.breed}</p>
            <p><strong>Age:</strong> {dog.age} years old</p>
            <p><strong>Owner:</strong> {dog.owner.name} {dog.owner.lastName}</p>
            <p><strong>Contact:</strong> {dog.owner.phoneNumber}</p>

            <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
            </button>
        </div>
        </div>
    );
}

export default DogDetails;