import { people } from "../../data";
import { Person } from "./Person";
console.log(people);

export const List = () => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          return <Person {...person} key={person.id} />;
        })}
      </ul>
    </div>
  );
};
