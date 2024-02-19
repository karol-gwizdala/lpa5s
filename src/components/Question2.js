import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const Question2 = () => {
  const { auditId } = useParams();

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question2Status: userQuestionStatus });
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
              <h3>Question 2</h3>
              {/* <p>{item.id}</p> */}
              <p>{item.question2}</p>
              {/* <p>{item.question2Status}</p> */}

              <p>
                <select
                  value={item.question2Status}
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
                  }}
                  onClick={() => updateItemDb(item.id)}
                  name="question2Status"
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
              <Link to={`/executeaudit/question3/${auditId}`}>
                <button>Next</button>
              </Link>
              <Link to={`/executeaudit/question1/${auditId}`}>
                <button class="secondary">Back</button>
              </Link>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
