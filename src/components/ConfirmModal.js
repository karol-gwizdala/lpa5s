import React from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const ConfirmModal = () => {
  const { auditId } = useParams();

  const updateItemDb = async (id) => {
    await db.audit.update(id, { auditStatus: "Completed" });
  };
  return (
    <dialog open>
      <article>
        <h3>Confirmation</h3>
        <p>Do you want to complete this audit?</p>
        <footer>
          <Link to={"/todo"}>
            <button onClick={() => updateItemDb(auditId * 1)}>Complete</button>
          </Link>
          <Link to={`/executeaudit/${auditId}`}>
            <button class="secondary">Cancel</button>
          </Link>
        </footer>
      </article>
    </dialog>
  );
};