import React from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const DeleteModalQuestion = () => {
  const { auditId } = useParams();

  const removeItemFromDb = async (id) => {
    await db.question.delete(id);
  };
  return (
    <dialog open>
      <article>
        <h3>Delete Confirmation</h3>
        <p>Do you want to delete this question?</p>
        <footer class="grid">
          <Link to={"/settings"}>
            <button class="secondary" type="submit">
              Cancel
            </button>
          </Link>
          <Link to={"/settings"}>
            <button style={{backgroundColor: "#D93526", borderColor: "#D93526"}} type="submit" onClick={() => removeItemFromDb(auditId * 1)}>
              Delete
            </button>
          </Link>
        </footer>
      </article>
    </dialog>
  );
};
