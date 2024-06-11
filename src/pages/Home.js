import React from "react";

export const Home = () => {
  return (
    <article>
      <h4>Welcome to LPA5S</h4>
      <p>Layered Process Audit 5S application.</p>
      <h6>First run:</h6>
      <ul>
        <li>Go to Settings panel</li>
        <li>Set up Layer (User) List, Area List and Question List (min. 5)</li>
        <li>Choose Layer (User)</li>
      </ul>
      <h6>Panel description:</h6>
      <ul>
        <li>New Audit - create new Audit. Select Layer, Area and Due Date</li>
        <li>To Do - list of all Audits and Delegated Tasks to execute</li>
        <li>Completed - list of all Completed Audits and Tasks</li>
        <li>Settings</li>
        <li>User - select user</li>
      </ul>
    </article>
  );
};
