import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { db } from "../db";
import { Link, useParams } from "react-router-dom";

export const ExecuteAudit = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const questions = useLiveQuery(() => db.question.toArray());

  const [userQuestionStatus, setUserQuestionStatus] = useState("");
  // const [answerStatus, setAnswerStatus] = useState = () => {
  //   if (userQuestionStatus !== "OK") {
  //     setAnswerStatus("true")
  //   } else {
  //     setAnswerStatus("false")
  //   }
  // };

  const updateItemDb = async (id) => {
    await db.question.update(id, { questionStatus: userQuestionStatus });
  };

  return (
    <div>
      {audits?.map((item) => {
        return (
          <h3>
            <tr>
              <td>{item.id}</td>
              <td>{item.role}</td>
              <td>{item.area}</td>
            </tr>
          </h3>
        );
      })}

      <h4>Question List:</h4>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Question</th>
          <th>QuestionStatus</th>
          <th>Check</th>
        </thead>
        <tbody>
          {questions?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.question}</td>
                <td>{item.questionStatus}</td>
                <td>
                  <select
                    value={item.questionStatus}
                    onChange={(e) => {
                      const selection = e.target.value;
                      setUserQuestionStatus(selection);
                    }}
                    onClick={() => updateItemDb(item.id)}
                    name="questionStatus"
                    aria-label=""
                    required
                    aria-invalid={"false"}
                  >
                    <option selected disabled value="">
                      Answer
                    </option>
                    <option>OK</option>
                    <option>NOK</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"/todo"}>
        <button>Complete Audit</button>
      </Link>
    </div>
  );
};
