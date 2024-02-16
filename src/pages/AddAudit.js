import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../db";

export function AddAudit() {
  const [audit, setAudit] = useState("");
  const [role, setRole] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [auditStatus, setAuditStatus] = useState("To Do");
  const [status, setStatus] = useState("");

  async function addAudit() {
    try {
      const id = await db.audit.add({
        role,
        area,
        date,
        auditStatus,
      });

      setStatus(`User "${audit}" successfully added. Got id ${id}`);
      setAudit("");
    } catch (error) {
      setStatus(`Failed to add ${audit}: ${error}`);
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
            Due Date:
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
