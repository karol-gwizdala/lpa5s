import { Link } from "react-router-dom";
import { SelectedUser } from "./SelectedUser";

export const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">LPA5S</Link>
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
        <li>
          <Link to="/delegated">Delegated</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <SelectedUser />
        </li>
      </ul>
    </nav>
  );
};
