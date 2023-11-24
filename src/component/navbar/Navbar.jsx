import * as React from "react";
import "animate.css";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="animate__animated animate__fadeInDown"
        sx={{
          position: "fixed",
          top: 0,
          animationDelay: "2500ms",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ backgroundColor: "#373737" }}>
          <Typography
            variant="h6"
            component="div"
            className="animate__animated animate__fadeInLeft"
            sx={{
              flexGrow: 1,
              animationDelay: "3000ms",
              fontSize: "1.5rem", // Adjust font size
              marginRight: "10px",
            }}
          >
            CompanyName™
          </Typography>
          <div style={{ display: "flex" }}>
            <Button
              color="inherit"
              className="animate__animated animate__fadeInLeft"
              style={{
                animationDelay: "4000ms",
                fontSize: "1rem", // Adjust font size
              }}
            >
              <CatchingPokemonIcon sx={{ fontSize: 32, marginRight: 1 }} />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
