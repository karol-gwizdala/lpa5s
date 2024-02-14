import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";

export function Role() {
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  async function addRole() {
    try {
      const id = await db.role.add({
        role,
      });

      setStatus(`User "${role}" successfully added. Got id ${id}`);
      setRole("");
    } catch (error) {
      setStatus(`Failed to add ${role}: ${error}`);
    }
  }

  const roles = useLiveQuery(() => db.role.toArray());

  return (
    <>
      <table role="grid">
        <thead>
          <h3>Role List:</h3>
        </thead>
        <tbody>
          {roles?.map((role) => {
            return (
              <tr>
                <td>{role.id}</td>
                <td>{role.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        type="text"
        value={role}
        onChange={(ev) => setRole(ev.target.value)}
        placeholder="New Role"
      />
      <button onClick={addRole}>Add</button>
    </>
  );
}
