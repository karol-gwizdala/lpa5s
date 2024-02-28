import React from "react";
import { useNavigate } from "react-router-dom";

export const AddAuditQuestion = () => {
  const navigate = useNavigate();

  return (
    <dialog open>
      <article>
        <h3>Information</h3>
        <p>Number of Audit questions is less than 5.</p>
        <p>Please add questions in Settings panel.</p>
        <button
          onClick={() => {
            navigate(-1);
          }}
          type="submit"
        >
          OK
        </button>
      </article>
    </dialog>
  );
};
