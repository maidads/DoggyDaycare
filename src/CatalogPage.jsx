import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CatalogPage() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758')
      .then(response => response.json())
      .then(data => setDogs(data.record));
  }, []);

  return (
    <div>
      <h1>Dog Catalog</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.id}>
            <Link to={`/dog/${dog.id}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;
