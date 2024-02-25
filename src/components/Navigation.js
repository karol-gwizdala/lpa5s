import { Link } from "react-router-dom";
import { SelectedUser } from "./SelectedUser";

export const Navigation = () => {
  return (
    <nav class="container">
      <ul>
        <li>
          <Link to="/"><strong>LPA5S</strong></Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/addaudit">New Audit</Link>
        </li>
        <li>
          <Link to="/todo">ToDo</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/settings">⚙️</Link>
        </li>
        <li>
          <SelectedUser />
        </li>
      </ul>
    </nav>
  );
};
