import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";
import { DelegateTask } from "./DelegateTask";

export const Question1 = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question1Status: userQuestionStatus });
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
              <progress value="20" max="100" />
              <h3>Question 1</h3>
              <p>{item.question1}</p>
              <p>
                <select
                  value={item.question1Status}
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
                  }}
                  onClick={() => updateItemDb(item.id)}
                  name="question1Status"
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
                <Link to={"/todo"}>
                  <button type="submit" class="secondary">
                    Cancel
                  </button>
                </Link>
                <Link to={`/executeaudit/question2/${auditId}`}>
                  <button type="submit">Next</button>
                </Link>
              </div>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
