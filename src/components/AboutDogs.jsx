import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AboutDogs() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/66ea6857e41b4d34e4325758`)
      .then(response => response.json())
      .then(data => {
        const foundDog = data.record.find(d => d.id === parseInt(id));
        setDog(foundDog);
      });
  }, [id]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age} years</p>
      <p>Size: {dog.size}</p>
    </div>
  );
}

export default AboutDogs;
