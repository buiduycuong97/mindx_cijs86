import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState("");
  const [age, setAge] = useState(1);
  // 1
  useEffect(() => {
    console.log(1);
  });
  //3
  useEffect(() => {
    console.log(2);
  }, []);

  return (
    <div style={{ height: "1000px" }}>
      Hello
      <button onClick={() => setAge(0)}>Click</button>
    </div>
  );
};

export default Count;
