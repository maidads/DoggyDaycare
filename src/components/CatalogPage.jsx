import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CatalogPage.css';

function CatalogPage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/670c1ff0e41b4d34e4421001')
      .then(response => response.json())
      .then(data => setDogs(data.record));
  }, []);

  return (
    <div className="catalog-container">
      <h1>Dog Catalog</h1>
      <p>Click on a dog to get more information about them.</p>
      <div className="dog-grid">
        {dogs.map((dog) => (
          <Link key={dog.chipNumber} to={`/dogs/${dog.chipNumber}`} className="dog-card">
            <img
              src={dog.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hTQwsrGuYW0XGXbIB4d2noVL1ZhL7llERA&s'}
              alt={dog.name}
              className="dog-image"
              onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hTQwsrGuYW0XGXbIB4d2noVL1ZhL7llERA&s'}
            />
            <p className="dog-name">{dog.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
