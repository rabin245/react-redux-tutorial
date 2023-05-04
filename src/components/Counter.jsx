import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleSet = () => {
    dispatch({ type: "SET", payload: 10 });
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count.count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSet}>Set</button>
    </div>
  );
};

export default Counter;
