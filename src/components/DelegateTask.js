import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";
import { useParams } from "react-router-dom";

export function DelegateTask() {
  const { auditId } = useParams();

  const roles = useLiveQuery(() => db.role.toArray());
  const remarks = useLiveQuery(() => db.remark.toArray());

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const [remarkRole, setRemarkRole] = useState("");
  const [remarkDate, setRemarkDate] = useState("");
  const [remark, setRemark] = useState("");
  const auditRole = audits?.map((item) => {
    return item.role;
  });
  const auditDate = audits?.map((item) => {
    return item.date;
  });

  const auditArea = audits?.map((item) => {
    return item.area;
  });

  async function addRemark() {
    try {
      const id = await db.remark.put({
        auditId: auditId,
        auditRole,
        auditArea,
        auditDate,
        remarkStatus: "To Do (Task)",
        remarkRole,
        remarkDate,
        remark,
        remarkComment: "",
      });

      console.log(`Item ${id} added to db`);
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <details>
      <summary role="button">Delegate Task</summary>
      <input
        value={remark}
        onChange={(event) => setRemark(event.target.value)}
        type="text"
        name="text"
        placeholder="Remark"
        aria-label="Text"
      />
      <select
        value={remarkRole}
        onChange={(event) => setRemarkRole(event.target.value)}
      >
        <option value="" disabled selected>
          Responsible
        </option>
        {roles?.map((item) => {
          return <option>{item.role}</option>;
        })}
      </select>

      <input
        value={remarkDate}
        onChange={(event) => setRemarkDate(event.target.value)}
        type="date"
        name="date"
        aria-label="Date"
      />
      <button onClick={() => addRemark({ auditId: "3" })} type="submit">
        Add
      </button>
    </details>
  );
}
