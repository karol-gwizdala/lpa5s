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

  const questionNumber = () => {
    if (window.location.href.includes("question1")) {
      return navigate(`/executeaudit/question2/${auditId}`);
    } else if (window.location.href.includes("question2")) {
      return navigate(`/executeaudit/question3/${auditId}`);
    } else if (window.location.href.includes("question3")) {
      return navigate(`/executeaudit/question4/${auditId}`);
    } else if (window.location.href.includes("question4")) {
      return navigate(`/executeaudit/question5/${auditId}`);
    } else if (window.location.href.includes("question5")) {
      return navigate(`/executeaudit/confirmmodal/${auditId}`);
    }
  };

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
          name="remarkRole"
          onChange={(event) => setRemarkRole(event.target.value)}
        >
          <option value="" disabled>
            Responsible
          </option>
          {roles?.map((item) => {
            return <option key={item.id}>{item.role}</option>;
          })}
        </select>

        <input
          value={remarkDate}
          onChange={(event) => setRemarkDate(event.target.value)}
          type="date"
          name="date"
          aria-label="Date"
        />
        <div className="grid">
          <button
            type="submit"
            className="secondary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button
            style={{ backgroundColor: "#00895A", borderColor: "#00895A" }}
            onClick={() => {
              questionNumber();
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
