import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "animate.css";

const PokemonToCatch = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

    const fetchPokemonData = async () => {
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
    // Add your logic for catching the Pokemon here
    alert(`You caught ${pokemonData.name}!`);
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
        <p>Loading...</p>
      )}

      <Button
        className="animate__animated animate__fadeInUp"
        onClick={handleCatchNow}
        style={{
          marginTop: "20px",
          padding: "10px",
          fontSize: "1rem",
          color: "#373737",
          background: "#F6FEAA",
          animationDelay: "5500ms",
        }}
      >
        Catch Now
      </Button>
    </div>
  );
};

export default PokemonToCatch;
