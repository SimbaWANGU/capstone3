/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DetailsBody.scss';

function DetailsBody({
  rating,
  appearances,
  goalsScored,
  minutesPlayed,
  totalShots,
  shotsOnTarget,
}) {
  const averageRating = `Average Rating: ${rating}`;
  const totalAppearances = `Total Appearances: ${appearances}`;
  const goals = `Goals: ${goalsScored}`;
  const minutes = `Minutes: ${minutesPlayed}`;
  const shots = `Shots: ${totalShots}`;
  const shotsOn = `Shots On: ${shotsOnTarget}`;
  const shotsOff = `Shots Off: ${totalShots - shotsOnTarget}`;

  return (
    <div className="detailsBody">
      <ul>
        <li>
          <p>{averageRating}</p>
        </li>
        <li>
          <p>{totalAppearances}</p>
        </li>
        <li>
          <p>{goals}</p>
        </li>
        <li>
          <p>{minutes}</p>
        </li>
        <li>
          <p>{shots}</p>
        </li>
        <li>
          <p>{shotsOn}</p>
        </li>
        <li>
          <p>{shotsOff}</p>
        </li>
      </ul>
    </div>
  );
}

DetailsBody.propTypes = {
  rating: PropTypes.number.isRequired,
  appearances: PropTypes.number.isRequired,
  goalsScored: PropTypes.number.isRequired,
  minutesPlayed: PropTypes.number.isRequired,
  totalShots: PropTypes.number.isRequired,
  shotsOnTarget: PropTypes.number.isRequired,
};

export default DetailsBody;
