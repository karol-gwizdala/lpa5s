import React from "react";
import { Link } from "react-router-dom";

export const ToDo = () => {
  return (
    <div>
      <Link to="/addaudit">
        <button>New Audit</button>
      </Link>
    </div>
  );
};
