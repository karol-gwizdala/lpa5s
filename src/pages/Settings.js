import React from "react";
import { Area } from "../components/Area";
import { Role } from "../components/Role";
import { Question } from "../components/Question";

export const Settings = () => {
  return (
    <>
      <article><Area /></article>

      <article><Role /></article>

      <article><Question /></article>
    </>
  );
};
