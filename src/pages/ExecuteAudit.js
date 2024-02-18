import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { db } from "../db";
import { Link, useParams } from "react-router-dom";
import { Question1 } from "../components/Question1";
import { Question2 } from "../components/Question2";
import { Question3 } from "../components/Question3";
import { Question4 } from "../components/Question4";
import { Question5 } from "../components/Question5";

export const ExecuteAudit = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  return (
    <div>
      {audits?.map((item) => {
        return (
          <h3>
            <tr>
              <td>{item.id}</td>
              <td>|</td>
              <td>{item.role}</td>
              <td>|</td>
              <td>{item.area}</td>
              <td>|</td>
              <td>{item.date}</td>
            </tr>
          </h3>
        );
      })}

      <h4>Questions List:</h4>

      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />

      <Link to={`/executeaudit/confirmmodal/${auditId}`}>
        <button>Complete Audit</button>
      </Link>
      <Link to={`/executeaudit/deletemodal/${auditId}`}>
        <button class="secondary">Delete</button>
      </Link>
    </div>
  );
};
