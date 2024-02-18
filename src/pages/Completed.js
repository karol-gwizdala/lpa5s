import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react'
import { db } from '../db';
import { Link } from 'react-router-dom';

export const Completed = () => {
  const audits = useLiveQuery(() => db.audit
  .where("auditStatus")
  .equals("Completed").and(item => item.role === "Lean")
  .toArray());

  

  return (
    <div>
      <h3>Audit List [ Completed ]:</h3>
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
