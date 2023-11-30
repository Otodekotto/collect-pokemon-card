import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "animate.css";

const PokemonToCatch = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

    const fetchPokemonData = async () => {
      localStorage.removeItem("caughtPokemons");
      try {
        const randomPokemonId = getRandomPokemonId();
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon data");
        }

        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, []);

  const handleCatchNow = () => {
    if (pokemonData) {
      // Save the caught Pokemon to local storage
      const caughtPokemons =
        JSON.parse(localStorage.getItem("caughtPokemons")) || [];
      caughtPokemons.push(pokemonData.name);
      localStorage.setItem("caughtPokemons", JSON.stringify(caughtPokemons));

      // Display an alert to notify the user
      alert(`You caught ${pokemonData.name}!`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Typography
        className="animate__animated animate__fadeIn"
        style={{
          color: "#F6FEAA",
          fontWeight: "bold",
          fontSize: "1vw",
          animationDelay: "6500ms", // Add the unit "ms"
          y: -50,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit!
      </Typography>
      {pokemonData ? (
        <div
          className="animate__animated animate__fadeInDown"
          style={{ animationDelay: "5s" }}
        >
          <img
            src={pokemonData.sprites.other["official-artwork"].front_default}
            alt={pokemonData.name}
            style={{ width: "25vw", height: "auto" }}
          />
        </div>
      ) : (
        <></>
      )}

      <Button
        className="animate__animated animate__fadeInUp"
        onClick={handleCatchNow}
        style={{
          marginTop: "20px",
          padding: "10px",
          fontSize: "1rem",
          fontWeight: "bold", // Make the text bold
          color: "#373737",
          background: "#F6FEAA",
          borderRadius: "20px", // Adjust the value for roundness
          animationDelay: "5500ms",
        }}
      >
        Catch Now
      </Button>
    </div>
  );
};

export default PokemonToCatch;
