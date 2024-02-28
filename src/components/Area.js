import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Area() {
  const [area, setArea] = useState("");

  async function addArea() {
    try {
      const id = await db.area.add({
        area,
      });

      console.log(`Item ${id} added to db`);
    } catch (error) {
      console.log("Error");
    }
  }

  const areas = useLiveQuery(() => db.area.toArray());

  return (
    <>
      <button type="submit" disabled>
        Area List
      </button>
      <table role="grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Area</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {areas?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.area}</td>
                <td key={item.id}>
                  <Link to={`/settings/deletemodalarea/${item.id}`}>
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
          name="area"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          placeholder="New Area"
        />
        <button onClick={addArea}>Add</button>
      </div>
    </>
  );
}
