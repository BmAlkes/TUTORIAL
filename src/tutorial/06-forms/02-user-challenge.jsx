import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [newUser, setNewUser] = useState(data);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const addUser = { id: fakeId, name };
    setNewUser((prev) => [...prev, addUser]);
    setName("");
  };
  const removeUser = (id) => {
    const removeUser = newUser.filter((user) => user.id !== id);
    setNewUser(removeUser);
  };
  console.log(newUser);
  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Users</h4>
      {newUser.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <button onClick={() => removeUser(user.id)} className="btn">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
