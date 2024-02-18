import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";
import { Link } from "react-router-dom";
import { Question1 } from "../components/Question1";
import { SelectedUser } from "../components/SelectedUser";

export const ToDo = () => {
  const audits = useLiveQuery(() => db.audit
  .where("auditStatus")
  .equals("To Do").and(item => item.role === "Lean")
  .toArray());

  

  return (
    <div>
      <h3>Audit List [ To Do ]:</h3>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Role</th>
          <th>Area</th>
          <th>Date</th>
          <th>Status</th>
          <th>Execute</th>
        </thead>
        <tbody>
          {audits?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.auditStatus}</td>
                <td key={item.id}>
                  <Link to={`/executeaudit/${item.id}`}>
                    <button>Execute</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
