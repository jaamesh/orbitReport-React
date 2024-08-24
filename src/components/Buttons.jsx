import { useState } from 'react';
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((satType, id) => {
        return (
          <button onClick={() => filterByType(satType)} key={id}>
            {satType} Orbit
          </button>
        );
      })}

      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;