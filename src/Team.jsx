/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  const teamStyle = {
    border: "2px solid purple",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h2>Players: {team}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Team;
