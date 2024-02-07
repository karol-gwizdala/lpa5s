import React from 'react'
import Data from "../db/dbQuestion.json";

export const Question = () => {
  return (
    <>
    <table role="grid">
      <thead>
        <h3>Question List:</h3>
      </thead>
      <tbody>
        {Data.map((record) => {
          return (
            <tr>
              <td>{record.id}</td>
              <td>{record.question}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);
};
