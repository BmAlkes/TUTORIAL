import { useEffect, useState } from "react";

export const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2> Loading....</h2>;
  }
  return <h2>MultipleReturns</h2>;
};
