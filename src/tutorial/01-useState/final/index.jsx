import { useState } from "react";
import { data } from "../../../data";

const Final = () => {
  const [counter, setCounter] = useState(0);
  const [people, setPeople] = useState(data);

  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });
  const [value, setValue] = useState(0);
  const handleClick = () => {
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  const displayPerson = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  const removeItem = (id) => {
    setPeople(people.filter((people) => people.id !== id));
  };
  const clearItem = () => {
    setPeople([]);
  };
  return (
    <>
      <h2>useState Basics</h2>
      <p>You click {counter}</p>
      <button
        className="btn"
        onClick={() => {
          setCounter((prevState) => prevState + 1);
        }}
      >
        +
      </button>

      <h2>UseState Array Example</h2>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "4rem" }}
        onClick={clearItem}
      >
        clear items
      </button>
      <h2>UseState Object Example</h2>

      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>

      <h2>UseState gotcha</h2>

      <div>
        <h1>{value}</h1>
        <button className="btn" onClick={handleClick}>
          increase
        </button>
      </div>
    </>
  );
};

export default Final;
