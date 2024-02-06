import React from "react";
import { Db } from "./Db";

export const Settings = () => {
  return (
    <>
      <div>
        <Db />
      </div>
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

          <label for="layer">
            <input
              type="text"
              id="layer"
              name="layer"
              placeholder="Layer"
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
