import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../db";

export const Question5 = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question5Status: userQuestionStatus });
  };

  const [userQuestionStatus, setUserQuestionStatus] = useState("-");
  const [answerStatus, setAnswerStatus] = useState("");
  useEffect(() => {
    if (userQuestionStatus === "OK") {
      setAnswerStatus("false");
    } else if (userQuestionStatus === "NOK") {
      setAnswerStatus("true");
    }
  }, [userQuestionStatus, answerStatus]);

  return (
    <div>
      <table>
        <tbody>
          {audits?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.question5}</td>
                <td>{item.question5Status}</td>
                <td>
                  <select
                    value={item.question5Status}
                    onChange={(e) => {
                      const selection = e.target.value;
                      setUserQuestionStatus(selection);
                    }}
                    onClick={() => updateItemDb(item.id)}
                    name="question5Status"
                    aria-label=""
                    required
                    aria-invalid={answerStatus}
                  >
                   <option value="-" disabled selected>
                      -
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
    </div>
  );
};
