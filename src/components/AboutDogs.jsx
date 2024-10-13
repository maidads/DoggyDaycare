import React from 'react';
import './AboutDogs.css';

function AboutDogs() {
  return (
    <div className="about-container">
      <h1>About Dogs</h1>
      <p>Welcome to our Doggy Daycare! We take care of dogs of all shapes and sizes, ensuring they are well looked after while you're away. Our experienced team is here to provide the best care and love for your furry friends.</p>

      <h2>General Dog Care Tips</h2>
      <p>
        Taking care of a dog requires attention and love. Here are some essential tips to keep your dog happy and healthy:
      </p>
      <ul>
        <li><strong>Feeding:</strong> Make sure to feed your dog a balanced diet, suitable for their age, size, and breed.</li>
        <li><strong>Exercise:</strong> Dogs need regular exercise to stay fit and mentally stimulated. Take them for walks or play fetch in the park!</li>
        <li><strong>Grooming:</strong> Depending on the breed, grooming can be essential. Regularly brush their coat and keep their nails trimmed.</li>
        <li><strong>Health Checkups:</strong> Ensure regular vet checkups to keep vaccinations up to date and monitor for any health issues.</li>
      </ul>
    </div>
  );
}

export default AboutDogs;