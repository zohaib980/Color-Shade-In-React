import React, { useState, useEffect, useRef } from "react";
import Values from "values.js";
import Shade from "./Shade";
import isColor from "is-color";

const Shades = ({ color }) => {
  const audioRef = useRef();
  const [shades, setShades] = useState([]);
  useEffect(() => {
    if (isColor(color)) createShades(color);
  }, [color]);

  const createShades = (color) => {
    const shades_color = new Values(color);
    let shades = shades_color.shades(1);
    console.log(shades[0].rgbString());

    setShades(shades);
  };

  const onColorCopy = () => {
    audioRef.current.play();
  };
  return (
    <div className="shades">
      <audio ref={audioRef} src={require("../assets/sound1.mp3")} />
      {shades.map((shade) => (
        <Shade shade={shade} onColorCopy={onColorCopy} />
      ))}
    </div>
  );
};

export default Shades;
