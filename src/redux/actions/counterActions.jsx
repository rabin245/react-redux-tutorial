const incrementCounter = () => ({
  type: "INCREMENT",
});

const decrementCounter = () => ({ type: "DECREMENT" });

const resetCounter = () => ({ type: "RESET" });

const setCounter = () => ({ type: "SET", payload: 10 });

const incrementCounterAsync = () => (dispatch) => {
  setTimeout(() => dispatch(incrementCounter()), 2000);
};

export {
  incrementCounter,
  decrementCounter,
  resetCounter,
  setCounter,
  incrementCounterAsync,
};
