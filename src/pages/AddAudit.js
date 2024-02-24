import { useLiveQuery } from "dexie-react-hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../db";

export function AddAudit() {
  const questions = useLiveQuery(() => db.question.toArray());
  const questionsMapLength = questions?.map((item) => item.question).length;

  function numberOfArrayElements() {
    let newArray = [];
    for (let i = 0; i < questionsMapLength; i++) {
      let arrayItem = questions?.map((item) => item.question)[i];
      newArray.push(arrayItem);
    }
    return newArray;
  }
  const arrayQuestion = numberOfArrayElements();

  function genRandomElements(array) {
    let currentArray = [...array];
    let newArray = [];
    for (let i = 0; i < 5; i++) {
      let randNum = Math.floor(Math.random() * currentArray.length);
      let splicedItem = currentArray.splice(randNum, 1)[0];
      newArray.push(splicedItem);
    }
    return newArray;
  }
  const arrayQuestionRandom = genRandomElements(arrayQuestion);

  const [role, setRole] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const auditStatus = "To Do (Audit)";
  const questionStatus = "-";
  const questionRemark = "";
  const question1 = arrayQuestionRandom[0];
  const question2 = arrayQuestionRandom[1];
  const question3 = arrayQuestionRandom[2];
  const question4 = arrayQuestionRandom[3];
  const question5 = arrayQuestionRandom[4];

  async function addAudit() {
    try {
      const id = await db.audit.add({
        role,
        area,
        date,
        auditStatus,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question1Status: questionStatus,
        question2Status: questionStatus,
        question3Status: questionStatus,
        question4Status: questionStatus,
        question5Status: questionStatus,
        question1Remark: questionRemark,
        question2Remark: questionRemark,
        question3Remark: questionRemark,
        question4Remark: questionRemark,
        question5Remark: questionRemark,
      });

      console.log(`Item ${id} added to db`);
    } catch (error) {
      console.log("Error");
    }
  }

  const roles = useLiveQuery(() => db.role.toArray());
  const areas = useLiveQuery(() => db.area.toArray());

  return (
    <dialog open>
      <article>
        <form>
          <h2>Create New Audit</h2>
          <label>
            Role:
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {roles?.map((item) => {
                return <option>{item.role}</option>;
              })}
            </select>
          </label>

          <label>
            Area:
            <select
              value={area}
              onChange={(event) => setArea(event.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              {areas?.map((item) => {
                return <option>{item.area}</option>;
              })}
            </select>
          </label>

          <label>
            Date:
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
              name="date"
              aria-label="Date"
            />
          </label>

          <footer>
            <div>
              <Link to="/todo">
                <button className="secondary">Cancel</button>
              </Link>
            </div>
            <Link to="/todo">
              <button onClick={addAudit}>Confirm</button>
            </Link>
          </footer>
        </form>
      </article>
    </dialog>
  );
}
