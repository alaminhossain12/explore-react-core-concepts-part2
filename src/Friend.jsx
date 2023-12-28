/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Friend = ({ friend }) => {
  //   console.log(friend);
  const { name, email } = friend;
  return (
    <div className="friends">
      <h1>Name: {name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
