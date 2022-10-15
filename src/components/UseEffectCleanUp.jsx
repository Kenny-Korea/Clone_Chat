import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectCleanUp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);

    return () => {
      console.log(count);
    };
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="UseEffectCleanUp">
        <div>{count}</div>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </>
  );
};

export default UseEffectCleanUp;
