import { useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

export const MultpleReturnFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useState(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUser();
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>Fetch Data</h2>
      <img
        src={user?.avatar_url}
        alt=""
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <h4>Work At {user.company} </h4>
      <p>{user.bio}</p>
    </div>
  );
};
