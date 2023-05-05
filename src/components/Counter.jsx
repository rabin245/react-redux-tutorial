import { connect } from "react-redux";
import {
  decrementCounter,
  resetCounter,
  setCounter,
  incrementCounterAsync,
} from "../redux/actions/counterActions";
import { getCounter } from "../redux/selectors/counterSelectors";
import { useRef } from "react";

const Counter = (props) => {
  const count = props.count;

  const handleIncrement = () => {
    props.increment();
  };

  const handleDecrement = () => {
    props.decrement();
  };

  const handleReset = () => {
    props.reset();
  };

  const handleSet = () => {
    props.set(Number(countRef.current.value));
  };

  const handleAsyncIncrement = () => {
    props.asyncIncrement();
  };

  const countRef = useRef(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <input type="number" ref={countRef} />

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAsyncIncrement}>Increment Async</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSet}>Set</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: getCounter(state),
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch(decrementCounter()),
    reset: () => dispatch(resetCounter()),
    set: (value) => dispatch(setCounter(value)),
    asyncIncrement: () => dispatch(incrementCounterAsync()),
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProp)(Counter);
