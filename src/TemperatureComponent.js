import React, { useState } from "react";
import InputComponent from "./InputComponent";

export default function TemperatureComponent(props) {
  const [temp, updateTemp] = useState({
    C: 0,
    F: 32,
  });
  const updateC = (e) => {
    updateTemp({
      C: e.target.value,
      F: ((e.target.value * 9) / 5 + 32).toFixed(2),
    });
  };
  const updateF = (e) => {
    updateTemp({
      C: (((e.target.value - 32) * 5) / 9).toFixed(2),
      F: e.target.value,
    });
  };
  return (
    <div className='temp-fields'>
      <InputComponent temp={temp} updateC={updateC} updateF={updateF} />
    </div>
  );
}
