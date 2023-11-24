import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "animate.css";

const ContentBackground = () => {
  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#F6FEAA",
    boxShadow: "none", // Remove shadow
    borderRadius: "12px", // Make the button more square
    "&:hover": {
      backgroundColor: "#F6FEAA", // Change highlight color on hover
      color: "#373737",
    },
    width: "1vw", // Adjust width as needed
    height: "1vw",
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#373737",
        width: "100%",
        minHeight: "100vh", // Ensure the div takes at least the full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        className="animate__animated animate__zoomInDown"
        style={{
          color: "#F6FEAA",
          fontWeight: "bold",
          fontSize: "8vw",
          animationDelay: "4500ms",
        }}
      >
        CompanyName
      </Typography>
      <Stack
        className="animate__animated animate__fadeInUp"
        direction="column"
        spacing={2}
        sx={{
          position: "absolute",
          left: "1%",
          top: "45%",
          transform: "translateY(-50%)",
          animationDelay: "5000ms",
          zIndex: 2, // Ensure the buttons appear above the text
        }}
      >
        <Button
          startIcon={<InstagramIcon />}
          sx={{ ...buttonStyle, padding: "15px" }}
        ></Button>
        <Button
          startIcon={<FacebookIcon />}
          sx={{ ...buttonStyle, padding: "15px" }}
        ></Button>
        <Button
          startIcon={<TwitterIcon />}
          sx={{ ...buttonStyle, padding: "15px" }}
        ></Button>
      </Stack>
    </div>
  );
};

export default ContentBackground;
