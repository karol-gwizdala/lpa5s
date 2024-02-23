import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";

export function Role() {
  const [role, setRole] = useState("");

  async function addRole() {
    try {
      const id = await db.role.add({
        role,
      });
      console.log(`Item ${id} added to db`);
    } catch (error) {
      console.log("Error");
    }
  }

  const roles = useLiveQuery(() => db.role.toArray());

  const removeItemFromDb = async (id) => {
    await db.role.delete(id);
  };

  return (
    <>
      <button disabled>Role List:</button>
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
        onChange={(event) => setRole(event.target.value)}
        placeholder="New Role"
      />
      <button onClick={addRole}>Add</button>
    </>
  );
}
