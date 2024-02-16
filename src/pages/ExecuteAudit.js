import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../db";

export const ExecuteAudit = () => {
  const audits = useLiveQuery(() => db.audit.toArray());

  return <div>details</div>;
};
