import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";

export const ToDo = () => {
  const audits = useLiveQuery(() => db.audit.toArray());

  const removeItemFromDb = async (id) => {
    await db.audit.delete(id);
  };

  

  return (
    <div>
      <h3>Audit List:</h3>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Role</th>
          <th>Area</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {audits?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td>{item.area}</td>
                <td>{item.date}</td>
                <td>{item.auditStatus}</td>
               

                <td key={item.id}>
                  <button onClick={() => removeItemFromDb(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
