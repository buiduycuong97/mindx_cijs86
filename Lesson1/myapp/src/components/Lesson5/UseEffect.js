import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  // fetch

  useEffect(() => {
    fetchData("https://64ce631a0c01d81da3eec4d5.mockapi.io/users")
      .then((data) => {
        console.log("Dữ liệu nhận được:", data);
        setData(data);
      })
      .catch((error) => {
        console.log("Đã xảy ra lỗi:", error);
      });
    console.log(4);

    return () => {
      console.log(3);
    };
  }, [count]);
  console.log(data);

  return (
    <div>
      {console.log(2)}
      {data.map((value) => {
        return (
          <div>
            <p>{value.name}</p>
            <p>{value.age}</p>
            <p>{value.phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffect;
