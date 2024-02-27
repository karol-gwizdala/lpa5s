import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";
import { useNavigate, useParams } from "react-router-dom";

export function DelegateTask() {
  const { auditId } = useParams();
  const navigate = useNavigate();

  const roles = useLiveQuery(() => db.role.toArray());

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
      const id = await db.remark.add({
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
    <dialog open>
      <article>
        <h3>Delegate Task</h3>
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
        <div class="grid">
          <button
            type="submit"
            class="secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button
            style={{ backgroundColor: "#00895A", borderColor: "#00895A" }}
            onClick={() => {
              navigate(-1);
              addRemark();
            }}
            type="submit"
          >
            Add Task
          </button>
        </div>
      </article>
    </dialog>
  );
}
