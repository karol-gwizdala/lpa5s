import React from "react";
import Data from "../db/dbArea.json";

export const Area = () => {
  return (
    <>
      <table role="grid">
        <thead>
          <h3>Area List:</h3>
        </thead>
        <tbody>
          {Data.map((record) => {
            return (
              <tr>
                <td>{record.id}</td>
                <td>{record.area}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
