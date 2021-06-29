import React from "react";

export default function InputComponent({ temp, updateF, updateC }) {
  return (
    <div className='container'>
      <div className='row'>
        <label htmlFor='celcius' className='col-md-1 col-12'>
          Celcius:
        </label>
        <input
          className='col-md-5 col-12'
          name='celcius'
          type='number'
          value={temp.C}
          onChange={updateC}
        />
        <label className='col-md-1 col-12' htmlFor='fahrenheit'>
          Fahrenheit:
        </label>
        <input
          className='col-md-5 col-12'
          name='fahrenheit'
          type='number'
          value={temp.F}
          onChange={updateF}
        />
      </div>
    </div>
  );
}
