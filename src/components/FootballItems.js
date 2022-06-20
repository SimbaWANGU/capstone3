/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/FootballItem.scss';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function FootballItems({ name, seasons }) {
  const seasonsRecorded = `Seasons Recorded: ${seasons}`;
  return (
    <div className="footballItem">
      <ArrowCircleRightOutlinedIcon style={{ fill: '#FAFAFA' }} className="arrowGo" />
      <h4>{name}</h4>
      <p>
        {seasonsRecorded}
      </p>
    </div>
  );
}

export default FootballItems;
