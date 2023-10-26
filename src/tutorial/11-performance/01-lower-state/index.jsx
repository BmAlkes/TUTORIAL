import { useState } from "react";
import { data } from "../../../data";
import List from "./List";
import Counter from "./Counter";
const LowerState = () => {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(data);

  return (
    <section className="container">
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;
