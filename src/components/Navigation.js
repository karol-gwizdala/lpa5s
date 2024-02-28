import { Link } from "react-router-dom";
import { SelectedUser } from "./SelectedUser";

export const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">
            <strong>LPA5S</strong>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/addauditmodal">New Audit</Link>
        </li>
        <li>
          <Link to="/todo" style={{ color: "#D93526" }}>
            ToDo
          </Link>
        </li>
        <li>
          <Link to="/completed" style={{ color: "#00895A" }}>
            Completed
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/settings" data-tooltip="Settings" data-placement="left">
            ⚙️
          </Link>
        </li>
        <li>
          <SelectedUser />
        </li>
      </ul>
    </nav>
  );
};
