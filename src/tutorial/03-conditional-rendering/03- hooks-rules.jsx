/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }
  // this will also fail
  useEffect(() => {
    console.log("hello there");
  }, []);

  if (condition) {
    return <h2>Hello There</h2>;
  }
  return <h2>example</h2>;
};

export default Example;
