import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../db";

export const Question4 = () => {
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
    await db.audit.update(id, { question4Status: userQuestionStatus });
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
            <div key={item.id}>
              <progress value="80" max="100" />
              <h3>Question 4</h3>
              <p>{item.question4}</p>
              <p>
                <select
                  value={item.question4Status}
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
                  }}
                  onClick={() => updateItemDb(item.id)}
                  name="question4Status"
                  aria-label=""
                  required
                  aria-invalid={answerStatus}
                >
                  <option value="-" disabled>
                    -
                  </option>
                  <option>NOK</option>
                  <option>OK</option>
                </select>
              </p>

              <button
                style={{ backgroundColor: "#D93526", borderColor: "#D93526" }}
                type="submit"
                className="secondary"
                disabled={answerDelegateStatus}
                onClick={() => {
                  navigate(`/executeaudit/question4/delegatetask/${auditId}`);
                }}
              >
                Delegate Task
              </button>

              <div className="grid">
                <Link to={`/executeaudit/question3/${auditId}`}>
                  <button type="submit" className="secondary">
                    Back
                  </button>
                </Link>
                <Link to={`/executeaudit/question5/${auditId}`}>
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
