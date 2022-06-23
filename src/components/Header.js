import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SettingsIcon from '@mui/icons-material/Settings';

function Header({ title }) {
  return (
    <div className="header">
      <NavLink to="/">
        <ArrowBackIosNewIcon className="back" style={{ fill: '#FAFAFA' }} />
      </NavLink>
      <p>2021</p>
      <h5>{title}</h5>
      <KeyboardVoiceIcon style={{ fill: '#FAFAFA' }} />
      <SettingsIcon style={{ fill: '#FAFAFA' }} />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
