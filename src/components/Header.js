import React from 'react';
import '../styles/Header.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <div className="header">
      <ArrowBackIosNewIcon style={{ fill: '#FAFAFA' }} />
      <p>2022</p>
      <h5>Competitions</h5>
      <KeyboardVoiceIcon style={{ fill: '#FAFAFA' }} />
      <SettingsIcon style={{ fill: '#FAFAFA' }} />
    </div>
  );
}

export default Header;
