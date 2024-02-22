import { useLiveQuery } from "dexie-react-hooks";
import React, { useContext } from "react";
import { db } from "../db";
import { Link } from "react-router-dom";
import { SelectedUserContext } from "../contexts/SelectedUserContext";

export const ToDo = () => {
  const { userRole } = useContext(SelectedUserContext);

  const audits = useLiveQuery(() =>
    db.audit
      .where("auditStatus")
      .equals("To Do")
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
      <h3>Audit List [ To Do ]:</h3>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Role</th>
          <th>Area</th>
          <th>Date</th>
          <th>Status</th>
          <th>Execute</th>
          <th>Delete</th>
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
                  <Link to={`/executeaudit/question1/${item.id}`}>
                    <button>Execute</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/executeaudit/deletemodal/${item.id}`}>
                    <button class="secondary">Delete</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Delegated Task List [ To Do ]:</h3>
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
                  <Link to={`/executetask/${item.id}`}>
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
