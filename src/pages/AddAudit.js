import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { Link } from "react-router-dom";
import { db } from "../db";

export const AddAudit = () => {
  const roles = useLiveQuery(() => db.role.toArray());
  const areas = useLiveQuery(() => db.area.toArray());
  return (
    <dialog open>
      <article>
        <h2>Create New Audit</h2>

        <ul>
          <li>
            Role:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              {roles?.map((item) => {
                return <option>{item.role}</option>;
              })}
            </select>
          </li>
          <li>
            Area:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              {areas?.map((item) => {
                return <option>{item.area}</option>;
              })}
            </select>
          </li>
          <li>Due Date:</li>
        </ul>
        <footer>
          <div>
            <Link to="/todo">
              <button className="secondary">Cancel</button>
            </Link>
          </div>
          <button>Confirm</button>
        </footer>
      </article>
    </dialog>
  );
};
