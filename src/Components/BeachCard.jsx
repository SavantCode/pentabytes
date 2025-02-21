import React from 'react';

const BeachCard = ({ beach }) => {
  return (
    <div className={`beach-card ${beach.safe ? 'safe' : 'not-safe'}`}>
      <div className="beach-image">
        <img src={`https://source.unsplash.com/500x300/?beach,${beach.name}`} alt={beach.name} />
      </div>
      <div className="beach-info">
        <h3>{beach.name}</h3>
        <p><strong>Location:</strong> {beach.location}</p>
        <p><strong>Timings:</strong> {beach.open} - {beach.close}</p>
        <p className={`safe-tag ${beach.safe ? 'safe' : 'not-safe'}`}>
          {beach.safe ? 'Safe to visit' : 'Not Safe to visit'}
        </p>
      </div>
    </div>
  );
};

export default BeachCard;
