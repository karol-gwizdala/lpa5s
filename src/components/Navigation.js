import React from "react";
import { Link } from "react-router-dom";

import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

export const Navigation = () => {
  const roles = useLiveQuery(() => db.role.toArray());

  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">LPA5S</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/addaudit">New Audit</Link>
        </li>
        <li>
          <Link to="/todo">ToDo</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
        <li>
          <Link to="/delegated">Delegated</Link>
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
            {roles?.map((role) => {
              return <option>{role.role}</option>;
            })}
          </select>
        </li>
      </ul>
    </nav>
  );
};
