import React from "react";
import Data from "../db.json";

export const Db = () => {
  return (
    <>
      {Data.map((record) => {
        return (
          <div className="container" key={record.id}>
            <p>{record.area}</p>
            <p>{record.lastname}</p>
          </div>
        );
      })}
    </>
  );
};
