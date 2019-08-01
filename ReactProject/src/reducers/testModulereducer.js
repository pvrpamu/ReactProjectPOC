const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_INCREMENT":
      return { ...state, value: state.value + action.value };
    case "ON_DECREMENT":
      return { ...state, value: state.value - action.value };
    case "ON_RESET":
      return { ...state, value: (state.value = 0) };
    default:
      return { ...state };
  }
};

export default reducer;
