import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";
import { DelegateTask } from "./DelegateTask";

export const Question3 = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question3Status: userQuestionStatus });
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
      <article style={{width: 350}}>
        {audits?.map((item) => {
          return (
            <div>
              <progress value="60" max="100" />
              <h3>Question 3</h3>
              <p>{item.question3}</p>
              <p>
                <select
                  value={item.question3Status}
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
                  }}
                  onClick={() => updateItemDb(item.id)}
                  name="question3Status"
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

              <Link to={`/executeaudit/question4/${auditId}`}>
                <button>Next</button>
              </Link>
              <Link to={`/executeaudit/question2/${auditId}`}>
                <button class="secondary">Back</button>
              </Link>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
