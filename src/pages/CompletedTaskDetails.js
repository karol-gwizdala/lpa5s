import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const CompletedTaskDetails = () => {
  const { auditId } = useParams();

  const remarks = useLiveQuery(() =>
    db.remark
      .where("remarkStatus")
      .equals("Completed (Task)")
      .and((item) => item.id === auditId * 1)
      .toArray()
  );

  return (
    <dialog open>
      <article>
        <button type="submit" disabled>
          Task Details:
        </button>
        <table class="striped">
          <thead>
            <th>ID</th>
            <th>Audit ID</th>
            <th>Remark</th>
            <th>Comment</th>
            <th>Date</th>
          </thead>
          <tbody>
            {remarks?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.auditId}</td>
                  <td>{item.remark}</td>
                  <td>{item.remarkComment}</td>
                  <td>{item.remarkDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={"/completed"}>
          <button class="secondary" type="submit">Back</button>
        </Link>
      </article>
    </dialog>
  );
};
