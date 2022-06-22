/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/DetailsHeader.scss';

function DetailsHeader({ name, photo, team }) {
  return (
    <div className="detailsHeader">
      <img src={photo} alt="Scorer" />
      <h1>{name}</h1>
      <p>{team}</p>
    </div>
  );
}

export default DetailsHeader;
