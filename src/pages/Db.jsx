import React from "react";
import Data from "../db.json";

export const Db = () => {
  return (
    <>
      <table role="grid">
        <thead>
          <tr>
            <th>#</th>
            <th>Area</th>
            <th>Layer</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((record) => {
            return (
              <tr>
                <td>{record.id}</td>
                <td>{record.area}</td>
                <td>{record.layer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
