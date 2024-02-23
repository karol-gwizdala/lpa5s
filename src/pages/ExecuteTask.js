import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const ExecuteTask = () => {
  const { auditId } = useParams();

  const remarks = useLiveQuery(() =>
    db.remark
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.remark.update(id, { remarkStatus: "Completed (Task)" });
    await db.remark.update(id, { remarkComment: remarkComment });
  };

  const [remarkComment, setRemarkComment] = useState("");

  return (
    <dialog open>
      <article>
        {remarks?.map((item) => {
          return (
            <div>
              <h3>Remark</h3>
              <p>{item.remark}</p>
              <p>
                <input
                  value={remarkComment}
                  onChange={(event) => {
                    setRemarkComment(event.target.value);
                  }}
                  type="text"
                  name="text"
                  placeholder="Comment"
                  aria-label="Text"
                />
              </p>

              <Link to={"/completed"}>
                <button
                  onClick={() => {
                    updateItemDb(item.id);
                  }}
                >
                  Complete Task
                </button>
              </Link>
              <Link to={"/todo"}>
                <button class="secondary">Cancel</button>
              </Link>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
