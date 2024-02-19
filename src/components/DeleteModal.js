import React from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const DeleteModal = () => {
  const { auditId } = useParams();

  const removeItemFromDb = async (id) => {
    await db.audit.delete(id);
  };
  return (
    <dialog open>
      <article>
        <h3>Delete Confirmation</h3>
        <p>Do you want to delete this audit?</p>
        <footer>
          <Link to={"/todo"}>
            <button class="secondary" onClick={() => removeItemFromDb(auditId * 1)}>
              Delete
            </button>
          </Link>
          <Link to={"/todo"}>
            <button>Cancel</button>
          </Link>
        </footer>
      </article>
    </dialog>
  );
};
