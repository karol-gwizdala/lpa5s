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
      .equals("To Do (Audit)")
      .and((item) => item.role === userRole)
      .sortBy("date")
  );

  const remarks = useLiveQuery(() =>
    db.remark
      .where("remarkStatus")
      .equals("To Do (Task)")
      .and((item) => item.remarkRole === userRole)
      .sortBy("remarkDate")
  );

  return (
    <div class="grid">
      <article>
        <button style={{backgroundColor: "#D93526", borderColor: "#D93526"}} type="submit" disabled>
          Audit List [ To Do ]
        </button>
        <table class="striped">
          <thead>
            <th>ID</th>
            <th>Area</th>
            <th>Date↓</th>
            <th>Execute | Delete</th>
          </thead>
          <tbody>
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.area}</td>
                  <td>{item.date}</td>
                  <td>
                    <div class="grid">
                      <Link to={`/executeaudit/question1/${item.id}`}>
                        <button type="submit">✓</button>
                      </Link>

                      <Link to={`/executeaudit/deletemodal/${item.id}`}>
                        <button type="submit" class="secondary">✗</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
      <article>
        <button style={{backgroundColor: "#D93526", borderColor: "#D93526"}} type="submit" disabled>
          Task List [ To Do ]
        </button>
        <table class="striped">
          <thead>
            <th>ID</th>
            <th>Area</th>
            <th>Date↓</th>
            <th>Execute</th>
          </thead>
          <tbody>
            {remarks?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.auditArea}</td>
                  <td>{item.remarkDate}</td>
                  <td key={item.id}>
                    <Link to={`/executetask/${item.id}`}>
                      <button type="submit">✓</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </div>
  );
};
