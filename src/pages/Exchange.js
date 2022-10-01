import React from "react";
import Navbar from "../components/Navbar";

const Exchange = ({ handleChange }) => {
  return (
    <>
      <Navbar handleChange={handleChange} />
      <div>WatchList</div>
    </>
  );
};

export default Exchange;
