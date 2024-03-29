import React from "react";
import { Area } from "../components/Area";
import { Role } from "../components/Role";
import { Question } from "../components/Question";

export const Settings = () => {
  return (
    <>
      <div className="grid">
        <article>
          <Role />
        </article>
        <article>
          <Area />
        </article>
      </div>
      <div>
        <article>
          <Question />
        </article>
      </div>
    </>
  );
};
