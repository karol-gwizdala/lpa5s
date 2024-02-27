import React from "react";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
import { AddAudit } from "./AddAudit";
import { AddAuditQuestion } from "./AddAuditQuestion";

export const AddAuditModal = () => {
  const questions = useLiveQuery(() => db.question.toArray());
  const questionsMapLength = questions?.map((item) => item.question).length;

  const questionList = () => {
    if (questionsMapLength < 5) {
      return <AddAuditQuestion />;
    } else {
      return <AddAudit />;
    }
  };
  return <div>{questionList()}</div>;
};
