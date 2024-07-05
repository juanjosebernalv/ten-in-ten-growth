import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LinkButton = ({ label, clickHandler }) => {
  return (
    <Button variant="outlined" className="mt-10" endIcon={<ArrowForwardIcon />}
      onClick={clickHandler}
      sx={{
        marginTop: "40px",
        borderColor: "#B6F501",
        borderRadius: "14px",
        borderWidth: "2px",
        height: "54px",
        color: "#025556",
        fontWeight: 600,
        textTransform: "none",
        fontSize: "16px",
        width: "100%"
      }}>
      {label}
    </Button>
  );
};

export default LinkButton;
