import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db";

export const ExecuteTask = () => {
  const { auditId } = useParams();
  const [remarkExecuteDate, setRemarkExecuteDate] = useState("");
  const [remarkComment, setRemarkComment] = useState("");

  const remarks = useLiveQuery(() =>
    db.remark
      .where("id")
      .equals(auditId * 1)
      .toArray()
  );

  const updateItemDb = async (id) => {
    await db.remark.update(id, { remarkStatus: "Completed (Task)" });
    await db.remark.update(id, { remarkComment: remarkComment });
    await db.remark.update(id, { remarkExecuteDate: remarkExecuteDate });
  };

  return (
    <dialog open>
      <article>
        {remarks?.map((item) => {
          return (
            <div key={item.id}>
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
              <p>
                <input
                  value={remarkExecuteDate}
                  onChange={(event) => setRemarkExecuteDate(event.target.value)}
                  type="date"
                  name="date"
                  aria-label="Date"
                />
              </p>
              <div className="grid">
                <Link to={"/todo"}>
                  <button type="submit" className="secondary">
                    Cancel
                  </button>
                </Link>
                <Link to={"/completed"}>
                  <button
                    style={{
                      backgroundColor: "#00895A",
                      borderColor: "#00895A",
                    }}
                    type="submit"
                    onClick={() => {
                      updateItemDb(item.id);
                    }}
                  >
                    Complete Task
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </article>
    </dialog>
  );
};
