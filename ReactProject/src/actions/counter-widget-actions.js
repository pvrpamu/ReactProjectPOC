export function increment(value) {
  return {
    type: "ON_INCREMENT",
    value
  };
}

export function decrement(value) {
  return {
    type: "ON_DECREMENT",
    value
  };
}

export function reset(value) {
  return {
    type: "ON_RESET",
    value
  };
}
