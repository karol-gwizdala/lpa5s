import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";

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

  const removeItemFromDb = async (id) => {
    await db.question.delete(id);
  };

  return (
    <>
      <button disabled>Question List:</button>
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
                  <button onClick={() => removeItemFromDb(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        type="text"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="New Question"
      />
      <button onClick={addQuestion}>Add</button>
    </>
  );
}
