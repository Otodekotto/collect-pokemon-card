import React, { useEffect, useState } from "react";
import "animate.css";

const EnteringAnimation = () => {
  const [fadeOut1, setFadeOut1] = useState(false);
  const [fadeOut2, setFadeOut2] = useState(false);
  const [fadeOut3, setFadeOut3] = useState(false);

  useEffect(() => {
    const delay1 = 1000;
    const delay2 = 1500;
    const delay3 = 2000;

    const timeoutId1 = setTimeout(() => {
      setFadeOut1(true);
    }, delay1);

    const timeoutId2 = setTimeout(() => {
      setFadeOut2(true);
    }, delay2);

    const timeoutId3 = setTimeout(() => {
      setFadeOut3(true);
    }, delay3);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  return (
    <div>
      {/* First black strip at the top */}
      <div
        className={`animate__animated ${
          fadeOut1 ? "animate__fadeOutLeftBig" : ""
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "33%",
          backgroundColor: "White",
          zIndex: 1,
        }}
      />

      {/* Second black strip in the middle */}
      <div
        className={`animate__animated ${
          fadeOut2 ? "animate__fadeOutLeftBig" : ""
        }`}
        style={{
          position: "fixed",
          top: "33%",
          left: 0,
          width: "100%",
          height: "33%",
          backgroundColor: "White",
          zIndex: 1,
        }}
      />

      {/* Third black strip at the bottom */}
      <div
        className={`animate__animated ${
          fadeOut3 ? "animate__fadeOutLeftBig" : ""
        }`}
        style={{
          position: "fixed",
          top: "66%",
          left: 0,
          width: "100%",
          height: "34%",
          backgroundColor: "White",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default EnteringAnimation;
