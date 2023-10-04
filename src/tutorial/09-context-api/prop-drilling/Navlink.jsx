/* eslint-disable react/prop-types */
import UserContainer from "./UserContainer";

export const Navlink = ({ logout, user }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer logout={logout} user={user} />
    </div>
  );
};
