import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  // https://www.npmjs.com/package/typewriter-effect
  // Como criar efeito nas letras
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Web Developer",
          "Actuary",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
