import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { db } from "../db";
import { Link, useParams } from "react-router-dom";
import { ConfirmModal } from "../components/ConfirmModal";

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
  const [answerStatus, setAnswerStatus] = useState("true");
  useEffect(() => {
    if (userQuestionStatus === "OK") {
      setAnswerStatus("false");
    } else {
      setAnswerStatus("true");
    }
  }, [userQuestionStatus, answerStatus]);

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
