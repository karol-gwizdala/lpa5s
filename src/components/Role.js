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

  const removeItemFromDb = async (id) => {
    await db.role.delete(id);
  };

  return (
    <>
      <h3>Role List:</h3>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Role</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {roles?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td key={item.id}>
                  <button onClick={() => removeItemFromDb(item.id)}>
                    Delete
                  </button>
                </td>
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
