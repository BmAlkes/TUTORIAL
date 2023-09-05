import { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      try {
        const reponse = await fetch(url);
        const users = await reponse.json();
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    fechData();
  }, []);
  console.log(users);
  return (
    <div>
      <section>
        <h3>github users</h3>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt="" />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>Link repo</a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default FetchData;
