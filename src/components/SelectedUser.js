import { useLiveQuery } from "dexie-react-hooks";
import React, { useContext } from "react";
import { db } from "../db";
import { SelectedUserContext } from "../contexts/SelectedUserContext";
import { Link } from "react-router-dom";

export const SelectedUser = () => {
  const { userRole, setUserRole } = useContext(SelectedUserContext);
  const roles = useLiveQuery(() => db.role.toArray());
  return (
    <Link to="/">
      <select
        value={userRole}
        onChange={(event) => {
          setUserRole(event.target.value);
        }}
      >
        <option value="" disabled selected>
          User
        </option>
        {roles?.map((role) => {
          return <option>{role.role}</option>;
        })}
      </select>
    </Link>
  );
};
