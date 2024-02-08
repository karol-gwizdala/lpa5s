import React from "react";
import { Link } from "react-router-dom";
import Data from "../db/dbRole.json";
import { ToggleTheme } from "./ToggleTheme";

export const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">LPA5S</Link>
        </li>
        <li>
          <button onClick={ToggleTheme.themeSwitcher}></button>
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
        <li>
          <select>
            <option value="" disabled selected>
              User
            </option>

            {Data.map((record) => {
              return <option>{record.layer}</option>;
            })}
          </select>
        </li>
      </ul>
    </nav>
  );
};
