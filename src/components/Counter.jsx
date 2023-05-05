import { connect } from "react-redux";
import {
  decrementCounter,
  resetCounter,
  setCounter,
  incrementCounterAsync,
} from "../redux/actions/counterActions";
import { getCounter } from "../redux/selectors/counterSelectors";

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
    props.set();
  };

  const handleAsyncIncrement = () => {
    props.asyncIncrement();
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>

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
    set: () => dispatch(setCounter()),
    asyncIncrement: () => dispatch(incrementCounterAsync()),
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProp)(Counter);
