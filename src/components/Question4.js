import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../db";

export const Question4 = () => {
  const { auditId } = useParams();
  const navigate = useNavigate();
  const [userQuestionStatus, setUserQuestionStatus] = useState();
  const [answerStatus, setAnswerStatus] = useState("");
  const [delegateStatus, setDelegateStatus] = useState();
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
      setDelegateStatus(`/executeaudit/question5/${auditId}`);
      setAnswerDelegateStatus("disabled");
    } else if (userQuestionStatus === "NOK") {
      setAnswerStatus("true");
      setDelegateStatus(`/executeaudit/question4/delegatetask/${auditId}`);
      setAnswerDelegateStatus("");
    }
  }, [
    userQuestionStatus,
    answerStatus,
    delegateStatus,
    answerDelegateStatus,
    auditId,
  ]);

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
                  defaultValue="-"
                  onChange={(event) => {
                    setUserQuestionStatus(event.target.value);
                  }}
                  name="question4Status"
                  aria-invalid={answerStatus}
                >
                  <option disabled>-</option>
                  <option>NOK</option>
                  <option>OK</option>
                </select>
              </p>
              <div className="grid">
                <Link to={`/executeaudit/question3/${auditId}`}>
                  <button type="submit" className="secondary">
                    Back
                  </button>
                </Link>

                <button
                  type="submit"
                  onClick={() => {
                    updateItemDb(item.id);
                    navigate(delegateStatus);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};