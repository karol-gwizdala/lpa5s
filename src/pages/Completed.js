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
      .equals("Completed (Audit)")
      .and((item) => item.role === userRole)
      .sortBy("date")
  );

  const remarks = useLiveQuery(() =>
    db.remark
      .where("remarkStatus")
      .equals("Completed (Task)")
      .and((item) => item.remarkRole === userRole)
      .sortBy("remarkDate")
  );

  return (
    <div class="grid">
      <article>
        <button style={{backgroundColor: "#00895A", borderColor: "#00895A"}} type="submit" disabled>Audit List [ Completed ]</button>
        <table class="striped">
          <thead>
            <th>ID</th>
            <th>Area</th>
            <th>Date↓</th>
            <th>Details</th>
          </thead>
          <tbody>
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.area}</td>
                  <td>{item.date}</td>
                  <td key={item.id}>
                    <Link to={`/completeddetails/${item.id}`}>
                      <button type="submit">Details</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
      <article>
        <button style={{backgroundColor: "#00895A", borderColor: "#00895A"}} type="submit" disabled>Task List [ Completed ]</button>
        <table class="striped">
          <thead>
            <th>ID</th>
            <th>Area</th>
            <th>Date↓</th>
            <th>Details</th>
          </thead>
          <tbody>
            {remarks?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.auditArea}</td>
                  <td>{item.remarkDate}</td>
                  <td key={item.id}>
                    <Link to={`/completedtaskdetails/${item.id}`}>
                      <button type="submit">Details</button>
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
