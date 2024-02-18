import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";

export const SelectedUser = () => {
  const [userRole, setUserRole] = useState("");
  const roles = useLiveQuery(() => db.role.toArray());
  return (
    <select
      onChange={(e) => {
        const selection = e.target.value;
        setUserRole(selection);
      }}
    >
      <option value="" disabled selected>
        User
      </option>
      {roles?.map((role) => {
        return <option>{role.role}</option>;
      })}
    </select>
  );
};
