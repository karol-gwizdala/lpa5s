import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../db";

export function AddAudit() {
  const [role, setRole] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const auditStatus = "To Do";
  const questionStatus = "-";
  const question1a = "Pytanie nr 1";
  const question2a = "Pytanie nr 2";
  const question3a = "Pytanie nr 3";
  const question4a = "Pytanie nr 4";
  const question5a = "Pytanie nr 5";
  const [status, setStatus] = useState("");

  async function addAudit() {
    try {
      const id = await db.audit.add({
        role,
        area,
        date,
        auditStatus,
        question1: question1a,
        question2: question2a,
        question3: question3a,
        question4: question4a,
        question5: question5a,
        question1Status: questionStatus,
        question2Status: questionStatus,
        question3Status: questionStatus,
        question4Status: questionStatus,
        question5Status: questionStatus,
      });

      setStatus(`Audit successfully added. Got id ${id}`);
    } catch (error) {
      setStatus(`Failed to add : ${error}`);
    }
  }

  const roles = useLiveQuery(() => db.role.toArray());
  const areas = useLiveQuery(() => db.area.toArray());

  return (
    <dialog open>
      <article>
        <form>
          <h2>Create New Audit</h2>
          <label>
            Role:
            <select
              value={role}
              onChange={(e) => {
                const selection = e.target.value;
                setRole(selection);
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              {roles?.map((item) => {
                return <option>{item.role}</option>;
              })}
            </select>
          </label>

          <label>
            Area:
            <select
              value={area}
              onChange={(e) => {
                const selection = e.target.value;
                setArea(selection);
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              {areas?.map((item) => {
                return <option>{item.area}</option>;
              })}
            </select>
          </label>

          <label>
            Date:
            <input
              value={date}
              onChange={(e) => {
                const selection = e.target.value;
                setDate(selection);
              }}
              type="date"
              name="date"
              aria-label="Date"
            />
          </label>

          <footer>
            <div>
              <Link to="/todo">
                <button className="secondary">Cancel</button>
              </Link>
            </div>
            <Link to="/todo">
              <button onClick={addAudit}>Confirm</button>
            </Link>
          </footer>
        </form>
      </article>
    </dialog>
  );
}
