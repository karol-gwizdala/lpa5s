import { useLiveQuery } from "dexie-react-hooks";
import React, { useContext } from "react";
import { db } from "../db";
import { Link } from "react-router-dom";
import { SelectedUserContext } from "../contexts/SelectedUserContext";

export const Completed = () => {
  const { userRole } = useContext(SelectedUserContext);

  const audits = useLiveQuery(() =>
    db.audit
      .where("auditStatus")
      .equals("Completed")
      .and((item) => item.role === userRole)
      .toArray()
  );

  const remarks = useLiveQuery(() =>
    db.remark
      .where("remarkStatus")
      .equals("To Do (Task)")
      .and((item) => item.remarkRole === userRole)
      .toArray()
  );

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
          <th>Details</th>
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
                  <Link to={`/completeddetails/${item.id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Delegated Task List [ Completed ]:</h3>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Remark</th>
          <th>Area</th>
          <th>Date</th>
          <th>Status</th>
          <th>Execute</th>
        </thead>
        <tbody>
          {remarks?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.remark}</td>
                <td>{item.auditArea}</td>
                <td>{item.remarkDate}</td>
                <td>{item.remarkStatus}</td>
                <td key={item.id}>
                  <Link to={`/completeddetails/${item.id}`}>
                    <button>Details</button>
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
