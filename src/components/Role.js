import React from 'react'
import Data from "../db/dbRole.json";

export const Role = () => {
  return (
    <>
    <table role="grid">
      <thead>
        <h3>Role List:</h3>
      </thead>
      <tbody>
        {Data.map((record) => {
          return (
            <tr>
              <td>{record.id}</td>
              <td>{record.layer}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);
};
