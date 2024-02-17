import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";

export function Area() {
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");

  async function addArea() {
    try {
      const id = await db.area.add({
        area,
      });

      setStatus(`User "${area}" successfully added. Got id ${id}`);
      setArea("");
    } catch (error) {
      setStatus(`Failed to add ${area}: ${error}`);
    }
  }

  const areas = useLiveQuery(() => db.area.toArray());

  const removeItemFromDb = async (id) => {
    await db.area.delete(id);
  };

  return (
    <>
      <h4>Area List:</h4>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Area</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {areas?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.area}</td>
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
        value={area}
        onChange={(ev) => setArea(ev.target.value)}
        placeholder="New Area"
      />
      <button onClick={addArea}>Add</button>
    </>
  );
}
