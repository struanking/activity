function setNewState(state, newState) {
  return state.merge(state, newState);
}

export {
  setNewState,
};
