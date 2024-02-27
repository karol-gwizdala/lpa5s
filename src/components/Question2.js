import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../db";

export const Question2 = () => {
  const { auditId } = useParams();
  const navigate = useNavigate();
  const [userQuestionStatus, setUserQuestionStatus] = useState("-");
  const [answerStatus, setAnswerStatus] = useState("");
  const [answerDelegateStatus, setAnswerDelegateStatus] = useState("disabled");

  const audits = useLiveQuery(() =>
    db.audit
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.audit.update(id, { question2Status: userQuestionStatus });
  };

  useEffect(() => {
    if (userQuestionStatus === "OK") {
      setAnswerStatus("false");
      setAnswerDelegateStatus("disabled");
    } else if (userQuestionStatus === "NOK") {
      setAnswerStatus("true");
      setAnswerDelegateStatus("");
    }
  }, [userQuestionStatus, answerStatus, answerDelegateStatus]);

  return (
    <dialog open>
      <article>
        {audits?.map((item) => {
          return (
            <div>
              <progress value="40" max="100" />
              <h3>Question 2</h3>
              <p>{item.question2}</p>
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

              <button
                style={{ backgroundColor: "#D93526", borderColor: "#D93526" }}
                type="submit"
                class="secondary"
                disabled={answerDelegateStatus}
                onClick={() => {
                  navigate(`/executeaudit/question2/delegatetask/${auditId}`);
                }}
              >
                Delegate Task
              </button>

              <div class="grid">
                <Link to={`/executeaudit/question1/${auditId}`}>
                  <button type="submit" class="secondary">
                    Back
                  </button>
                </Link>
                <Link to={`/executeaudit/question3/${auditId}`}>
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
