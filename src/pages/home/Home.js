import React, { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // effect;
    (async () => {
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      setData(data);
      console.log("data", data);
    })();

    return () => {
      // cleanup;
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <ol>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <strong>{item.name}</strong> | <small>{item.email}</small>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
