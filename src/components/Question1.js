import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../db";

export const Question1 = () => {
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
    await db.audit.update(id, { question1Status: userQuestionStatus });
  };

  useEffect(() => {
    if (userQuestionStatus === "OK") {
      setAnswerStatus("false");
      setDelegateStatus(`/executeaudit/question2/${auditId}`);
      setAnswerDelegateStatus("disabled");
    } else if (userQuestionStatus === "NOK") {
      setAnswerStatus("true");
      setDelegateStatus(`/executeaudit/question1/delegatetask/${auditId}`);
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
                  required
                  aria-invalid={answerStatus}
                >
                  <option>NOK</option>
                  <option>OK</option>
                </select>
              </p>
              <div className="grid">
                <Link to="/todo">
                  <button type="submit" className="secondary">
                    Cancel
                  </button>
                </Link>

                <button
                  type="submit"
                  onClick={() => {
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
