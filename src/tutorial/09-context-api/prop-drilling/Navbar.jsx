import { createContext, useState } from "react";
import { Navlink } from "./Navlink";

export const NavBarContext = createContext();

export const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavBarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT Api</h5>
        <Navlink user={user} logout={logout} />
      </nav>
    </NavBarContext.Provider>
  );
};
