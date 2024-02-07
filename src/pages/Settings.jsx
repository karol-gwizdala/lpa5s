import React from "react";
import { Area } from "../components/Area";
import { Role } from "../components/Role";
import { Question } from "../components/Question";

export const Settings = () => {
  return (
    <>
      <Area />

      <form>
        <div class="grid">
          <label for="Area">
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Area"
              required
            />
          </label>
        </div>

        <button type="submit">Submit Area</button>
      </form>

      <Role />

      <form>
        <div class="grid">
          <label for="role">
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Role"
              required
            />
          </label>
        </div>

        <button type="submit">Submit Role</button>
      </form>

      
      <Question />

      <form>
        <div class="grid">
          <label for="question">
            <input
              type="text"
              id="question"
              name="question"
              placeholder="Question"
              required
            />
          </label>
        </div>

        <button type="submit">Submit Question</button>
      </form>
    </>
  );
};
