import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <button type="submit" disabled>
        Layer List
      </button>
      <table role="grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Layer</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {roles?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td key={item.id}>
                  <Link to={`/settings/deletemodalrole/${item.id}`}>
                    <button type="submit" className="secondary">
                      ✗
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div role="group">
        <input
          type="text"
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          placeholder="New Layer"
        />
        <button onClick={addRole}>Add</button>
      </div>
    </>
  );
}
