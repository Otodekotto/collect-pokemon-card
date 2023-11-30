import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const CartList = ({ open, onClose }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize the state with data from local storage
    const storedItems = localStorage.getItem("caughtPokemons");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    // Add a listener for the storage event to update cartItems
    const handleStorageChange = (event) => {
      if (event.key === "caughtPokemons") {
        // Update cartItems when the "caughtPokemons" key changes in local storage
        setCartItems(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Update cartItems when the component is open
    if (open) {
      const storedItems = localStorage.getItem("caughtPokemons");
      setCartItems(storedItems ? JSON.parse(storedItems) : []);
    }
  }, [open]);

  const handleCheckout = () => {
    // Add logic for handling the checkout action
    console.log("Checkout button clicked!");
  };

  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{ color: "#F6FEAA" }}
      >
        <List>
          {cartItems.length === 0 ? (
            <ListItem>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#F6FEAA" }}
              >
                No items in the cart.
              </Typography>
            </ListItem>
          ) : (
            <>
              <ListItem>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#F6FEAA" }}
                >
                  Your Shopping Cart.
                </Typography>
              </ListItem>
              {cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} sx={{ color: "#F6FEAA" }} />
                  {/* You can customize the display of other item properties here */}
                </ListItem>
              ))}
            </>
          )}
        </List>
        {cartItems.length > 0 && (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              padding: "16px",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              style={{
                marginTop: "20px",
                padding: "10px",
                fontSize: "1rem",
                fontWeight: "bold", // Make the text bold
                color: "#373737",
                background: "#F6FEAA",
                borderRadius: "20px", // Adjust the value for roundness
                animationDelay: "5500ms",
                width: "100%",
              }}
            >
              Checkout
            </Button>
          </div>
        )}
      </Drawer>
    </ThemeProvider>
  );
};

export default CartList;
