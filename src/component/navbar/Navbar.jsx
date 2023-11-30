import React, { useState } from "react";
import "animate.css";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartList from "../shopping/CartList";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

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
              onClick={handleDrawerOpen}
            >
              <CatchingPokemonIcon sx={{ fontSize: 32, marginRight: 1 }} />
              <ShoppingCartIcon sx={{ fontSize: 32, marginRight: 1 }} />
            </Button>
            <CartList open={drawerOpen} onClose={handleDrawerClose} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
