import React from 'react'
import { Link } from 'react-router-dom'

export const AddAuditQuestion = () => {
  return (
    <dialog open>
      <article>
        <h3>Information</h3>
        <p>Number of Audit questions is less than 5.</p>
        <p>Please add questions in Settings panel.</p>
        
          <Link to={"/todo"}>
            <button type="submit">
              OK
            </button>
          </Link>
       
      </article>
    </dialog>
  )
}
