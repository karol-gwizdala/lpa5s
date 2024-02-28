import React from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const ConfirmModal = () => {
  const { auditId } = useParams();

  const updateItemDb = async (id) => {
    await db.audit.update(id, { auditStatus: "Completed (Audit)" });
  };
  return (
    <dialog open>
      <article>
        <h3>Confirmation</h3>
        <p>Do you want to complete this audit?</p>
        <footer>
          <Link to={"/todo"}>
            <button type="submit" onClick={() => updateItemDb(auditId * 1)}>
              Complete
            </button>
          </Link>
          <Link to={`/executeaudit/${auditId}`}>
            <button type="submit" className="secondary">
              Cancel
            </button>
          </Link>
        </footer>
      </article>
    </dialog>
  );
};
