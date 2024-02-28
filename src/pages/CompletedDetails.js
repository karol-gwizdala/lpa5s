import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../db";
import { Link, useParams } from "react-router-dom";

export const CompletedDetails = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("auditStatus")
      .equals("Completed (Audit)")
      .and((item) => item.id === auditId * 1)
      .toArray()
  );

  return (
    <dialog open>
      <article>
        <button type="submit" disabled>
          Audit Details:
        </button>
        <table className="striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>1</td>
                  <td>{item.question1}</td>
                  <td>{item.question1Status}</td>
                </tr>
              );
            })}
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>2</td>
                  <td>{item.question2}</td>
                  <td>{item.question2Status}</td>
                </tr>
              );
            })}
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>3</td>
                  <td>{item.question3}</td>
                  <td>{item.question3Status}</td>
                </tr>
              );
            })}
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>4</td>
                  <td>{item.question4}</td>
                  <td>{item.question4Status}</td>
                </tr>
              );
            })}
            {audits?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>5</td>
                  <td>{item.question5}</td>
                  <td>{item.question5Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={"/completed"}>
          <button className="secondary" type="submit">
            Back
          </button>
        </Link>
      </article>
    </dialog>
  );
};
