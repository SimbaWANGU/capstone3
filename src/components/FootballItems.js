/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/FootballItem.scss';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function FootballItems({ name, goalsScored, photo }) {
  const goals = `${goalsScored} Goals`;

  const backgroundColor = '#5788e3b3';
  const backgroundColorGradient = '#5788e380';

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to left, ${backgroundColor}, ${backgroundColorGradient}), url(${photo})`,
  };

  return (
    <div className="footballItem" style={backgroundImageStyle}>
      <ArrowCircleRightOutlinedIcon style={{ fill: '#FAFAFA' }} className="arrowGo" />
      <h4>{name}</h4>
      <p>{goals}</p>
    </div>
  );
}

export default FootballItems;
