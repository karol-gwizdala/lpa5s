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
        <footer className="grid">
          <Link to={"/todo"}>
            <button className="secondary" type="submit">
              Cancel
            </button>
          </Link>
          <Link to={"/todo"}>
            <button style={{backgroundColor: "#D93526", borderColor: "#D93526"}} type="submit" onClick={() => removeItemFromDb(auditId * 1)}>
              Delete
            </button>
          </Link>
        </footer>
      </article>
    </dialog>
  );
};
