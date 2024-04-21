import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({ first: "", last: "" });

  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const subtract = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  const updateValues = (newVal) => {
    setValues((prev) => [...prev, newVal]);
  };

  return (
    <section>
      <h1 className="text-3xl font-bold underline">{count}</h1>
      <br></br>
      <div className="row">
        <button
          onClick={add}
          className="i-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
        <button
          onClick={subtract}
          className="i-secondary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => setCount(0)}
          className="reset-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
