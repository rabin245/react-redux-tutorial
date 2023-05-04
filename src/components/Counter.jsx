import { useSelector, useDispatch, connect } from "react-redux";

const Counter = (props) => {
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

  const handleAsyncIncrement = () => {
    props.asyncIncrement();
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count.count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAsyncIncrement}>Increment Async</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSet}>Set</button>
    </div>
  );
};

const asyncIncrement = () => {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: "INCREMENT" }), 2000);
  };
};

// export default Counter;
export default connect(null, { asyncIncrement })(Counter);
