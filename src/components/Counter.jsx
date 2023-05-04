import { useSelector } from "react-redux";
import { connect } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
  setCount,
} from "../actions/countAction";

const Counter = (props) => {
  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    props.incrementCount();
  };

  const handleDecrement = () => {
    props.decrementCount();
  };

  const handleReset = () => {
    props.resetCount();
  };

  const handleSet = () => {
    props.setCount(10);
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

// export default Counter;
// export default connect(null, { incrementCount, decrementCount, resetCount, setCount, })(Counter);

const connectToStore = connect(null, {
  incrementCount,
  decrementCount,
  resetCount,
  setCount,
});

export default connectToStore(Counter);
