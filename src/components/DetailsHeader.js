import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DetailsHeader.scss';

function DetailsHeader({ name, photo, team }) {
  return (
    <div className="detailsHeader" data-testid="detailsHeaderDisplay">
      <img src={photo} alt="Scorer" />
      <h1>{name}</h1>
      <p>{team}</p>
    </div>
  );
}

DetailsHeader.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};

export default DetailsHeader;
