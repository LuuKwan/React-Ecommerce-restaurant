import React from "react";
import { Link } from "react-router-dom";

const ReserveTableButton = ({ msg, path }) => {
  return (
    <button type="button" className="btn">
      <Link to={path}>{msg}</Link>
    </button>
  );
};

export default ReserveTableButton;
