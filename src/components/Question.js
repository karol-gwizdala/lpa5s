import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { useState } from "react";

export function Question() {
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState("");

  async function addQuestion() {
    try {
      const id = await db.question.add({
        question,
      });

      setStatus(`User "${question}" successfully added. Got id ${id}`);
      setQuestion("");
    } catch (error) {
      setStatus(`Failed to add ${question}: ${error}`);
    }
  }

  const questions = useLiveQuery(() => db.question.toArray());

  const removeItemFromDb = async (id) => {
    await db.question.delete(id);
  };

  return (
    <>
      <h3>Question List:</h3>
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
        onChange={(ev) => setQuestion(ev.target.value)}
        placeholder="New Question"
      />
      <button onClick={addQuestion}>Add</button>
    </>
  );
}
