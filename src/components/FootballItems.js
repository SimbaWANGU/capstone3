import React from 'react';
import '../styles/FootballItem.scss';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function FootballItems() {
  return (
    <div className="footballItem">
      <ArrowCircleRightOutlinedIcon style={{ fill: '#FAFAFA' }} className="arrowGo" />
      <h4>League Name</h4>
      <p>Some Data</p>
    </div>
  );
}

export default FootballItems;
