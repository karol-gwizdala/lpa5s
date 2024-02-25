import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Question() {
  const [question, setQuestion] = useState("");
  const questionStatus = "NOK";

  async function addQuestion() {
    try {
      const id = await db.question.add({
        question,
        questionStatus,
      });

      console.log(`Item ${id} added to db`);
    } catch (error) {
      console.log("Error");
    }
  }

  const questions = useLiveQuery(() => db.question.toArray());

  return (
    <>
      <button type="submit" disabled>
        Question List
      </button>
      <table role="grid">
        <thead>
          <th>ID</th>
          <th>Question</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {questions?.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.question}</td>
                <td key={item.id}>
                  <Link to={`/settings/deletemodalquestion/${item.id}`}>
                    <button
                      type="submit"
                      class="secondary"
                    >
                      ✗
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div role="group">
        <input
          type="text"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="New Question"
        />
        <button onClick={addQuestion}>Add</button>
      </div>
    </>
  );
}
