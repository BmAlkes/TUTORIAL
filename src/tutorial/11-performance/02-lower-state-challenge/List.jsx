/* eslint-disable react/prop-types */
import Person from "./Person";

// eslint-disable-next-line react/prop-types
const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
