const incrementCount = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementCount = () => ({ type: "DECREMENT" });

const resetCount = () => ({ type: "RESET" });

const setCount = (count) => ({ type: "SET", payload: count });

export { incrementCount, decrementCount, resetCount, setCount };
