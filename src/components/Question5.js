import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";
import { DelegateTask } from "./DelegateTask";

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
    <dialog open>
      <article>
        {audits?.map((item) => {
          return (
            <div>
              <progress value="100" max="100" />
              <h3>Question 5</h3>
              <p>{item.question5}</p>
              <p>
                <select
                  value={item.question5Status}
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
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

                  <option>NOK</option>

                  <option>OK</option>
                </select>
              </p>
              <DelegateTask />
              <div class="grid">
                <Link to={`/executeaudit/question4/${auditId}`}>
                  <button type="submit" class="secondary">
                    Back
                  </button>
                </Link>
                <Link to={`/executeaudit/confirmmodal/${auditId}`}>
                  <button style={{backgroundColor: "#00895A", borderColor: "#00895A"}} type="submit">Complete Audit</button>
                </Link>
              </div>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
