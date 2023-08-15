import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './HomepageStyle.css';

const BackBtn = () => {
    const navigate = useNavigate();
  const goBack = () => {
    // Implement the functionality to go back
    // For example, you can use history.goBack() if using React Router
    // history.goBack();
    navigate(-1);
    
  };

  return (
    <IconButton className="back-button" onClick={goBack}>
      <Avatar>
        <ArrowBackIcon />
      </Avatar>
    </IconButton>
  );
};

export default BackBtn;
