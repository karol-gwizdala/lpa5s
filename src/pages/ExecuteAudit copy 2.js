import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
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

  const [userQuestionStatus, setUserQuestionStatus] = useState("");const [userQuestion2Status, setUserQuestion2Status] = useState("");
  const [answerStatus, setAnswerStatus] = useState("true");
  useEffect(() => {
    if (userQuestionStatus === "OK") {
      setAnswerStatus("false");
    } else {
      setAnswerStatus("true");
    }
  }, [userQuestionStatus, answerStatus]);

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question1Status: userQuestionStatus, question2Status: userQuestion2Status });
  };
  // const updateItemDb2 = async (id) => {
  //   await db.audit.update(id, { question2Status: userQuestionStatus });
  // };

  return (
    <div>
      {audits?.map((item) => {
        return (
          <h3>
            <tr>
              <td>{item.id}</td>
              <td>|</td>
              <td>{item.role}</td>
              <td>|</td>
              <td>{item.area}</td>
              <td>|</td>
              <td>{item.date}</td>
            </tr>
          </h3>
        );
      })}

      <h4>Questions List:</h4>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Question</th>
          <th>QuestionStatus</th>
          <th>Check</th>
        </thead>
        <tbody>
          {audits?.map((item) => {
            return (
              <tr>
                <td>{1}</td>
                <td>{item.question1}</td>
                <td>{item.question1Status}</td>
                <td>
                  <select
                    value={item.question1Status}
                    onChange={(e) => {
                      const selection = e.target.value;
                      setUserQuestionStatus(selection);
                    }}
                    onClick={() => updateItemDb(item.id)}
                    name="question1Status"
                    aria-label=""
                    required
                    aria-invalid={answerStatus}
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
        <tbody>
          {audits?.map((item) => {
            return (
              <tr>
                <td>{2}</td>
                <td>{item.question2}</td>
                <td>{item.question2Status}</td>
                <td>
                  <select
                    value={item.question2Status}
                    onChange={(e) => {
                      const selection = e.target.value;
                      setUserQuestion2Status(selection);
                    }}
                    onClick={() => updateItemDb(item.id)}
                    name="question2Status"
                    aria-label=""
                    required
                    aria-invalid={answerStatus}
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
      <Link to={`/executeaudit/confirmmodal/${auditId}`}>
        <button>Complete Audit</button>
      </Link>
      <Link to={`/executeaudit/deletemodal/${auditId}`}>
        <button class="secondary">Delete</button>
      </Link>
    </div>
  );
};
