import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">LPA5S</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/todo">To Do</Link>
        </li>
        <li>
          <Link to="/delegated">Delegated</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
